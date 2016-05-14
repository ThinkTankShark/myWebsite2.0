<<<<<<< HEAD
require 'spec_helper'

module ActiveAdminIntegrationSpecHelper
  extend self

  def load_defaults!
    ActiveAdmin.unload!
    ActiveAdmin.load!
    ActiveAdmin.register(Category)
    ActiveAdmin.register(User)
    ActiveAdmin.register(Post){ belongs_to :user, optional: true }
    reload_menus!
  end

  def reload_menus!
    ActiveAdmin.application.namespaces.each{|n| n.reset_menu! }
  end

  # Sometimes we need to reload the routes within
  # the application to test them out
  def reload_routes!
    Rails.application.reload_routes!
  end

  # Helper method to load resources and ensure that Active Admin is
  # setup with the new configurations.
  #
  # Eg:
  #   load_resources do
  #     ActiveAdmin.regiser(Post)
  #   end
  #
  def load_resources
    ActiveAdmin.unload!
    yield
    reload_menus!
    reload_routes!
  end

  # Sets up a describe block where you can render controller
  # actions. Uses the Admin::PostsController as the subject
  # for the describe block
  def describe_with_render(*args, &block)
    describe *args do
      include RSpec::Rails::ControllerExampleGroup
      render_views
      # metadata[:behaviour][:describes] = ActiveAdmin.namespaces[:admin].resources['Post'].controller
      module_eval &block
    end
  end

  def arbre(assigns = {}, helpers = mock_action_view, &block)
    Arbre::Context.new(assigns, helpers, &block)
  end

  def render_arbre_component(assigns = {}, helpers = mock_action_view, &block)
    arbre(assigns, helpers, &block).children.first
  end

  # Setup a describe block which uses capybara and rails integration
  # test methods.
  def describe_with_capybara(*args, &block)
    describe *args do
      include RSpec::Rails::IntegrationExampleGroup
      module_eval &block
    end
  end

  # Returns a fake action view instance to use with our renderers
  def mock_action_view(assigns = {})
    controller = ActionView::TestCase::TestController.new
    ActionView::Base.send :include, ActionView::Helpers
    ActionView::Base.send :include, ActiveAdmin::ViewHelpers
    ActionView::Base.send :include, Rails.application.routes.url_helpers
    ActionView::Base.new(ActionController::Base.view_paths, assigns, controller)
  end
  alias_method :action_view, :mock_action_view

  # A mock resource to register
  class MockResource
  end

  def with_translation(translation)
    I18n.backend.store_translations :en, translation
    yield
  ensure
    I18n.backend.reload!
  end

end

ENV['RAILS_ENV'] = 'test'
ENV['RAILS_ROOT'] = File.expand_path("../rails/rails-#{ENV['RAILS']}", __FILE__)

# Create the test app if it doesn't exists
unless File.exists?(ENV['RAILS_ROOT'])
  system 'rake setup'
end

require 'rails'
require 'active_record'
require 'active_admin'
require 'devise'
ActiveAdmin.application.load_paths = [ENV['RAILS_ROOT'] + "/app/admin"]

require ENV['RAILS_ROOT'] + '/config/environment'

require 'rspec/rails'

# Prevent Test::Unit's AutoRunner from executing during RSpec's rake task on
# JRuby
Test::Unit.run = true if defined?(Test::Unit) && Test::Unit.respond_to?(:run=)

# Setup Some Admin stuff for us to play with
include ActiveAdminIntegrationSpecHelper
load_defaults!
reload_routes!

# Disabling authentication in specs so that we don't have to worry about
# it allover the place
ActiveAdmin.application.authentication_method = false
ActiveAdmin.application.current_user_method = false

# Don't add asset cache timestamps. Makes it easy to integration
# test for the presence of an asset file
ENV["RAILS_ASSET_ID"] = ''

RSpec.configure do |config|
  config.use_transactional_fixtures = true
  config.use_instantiated_fixtures = false
  config.include Devise::TestHelpers, type: :controller
  config.render_views = false
  config.filter_run focus: true
  config.filter_run_excluding skip: true
  config.run_all_when_everything_filtered = true
  config.color = true
end

# All RSpec configuration needs to happen before any examples
# or else it whines.
require "support/active_admin_request_helpers"
RSpec.configure do |c|
  c.include ActiveAdminRequestHelpers, type: :request
  c.include Devise::TestHelpers, type: :controller
end

# Force deprecations to raise an exception.
# This would set `behavior = :raise`, but that wasn't added until Rails 4.
ActiveSupport::Deprecation.behavior = -> message, callstack do
  e = StandardError.new message
  e.set_backtrace callstack.map(&:to_s)
  raise e
end

# improve the performance of the specs suite by not logging anything
# see http://blog.plataformatec.com.br/2011/12/three-tips-to-improve-the-performance-of-your-test-suite/
Rails.logger.level = 4

# Improves performance by forcing the garbage collector to run less often.
unless ENV['DEFER_GC'] == '0' || ENV['DEFER_GC'] == 'false'
  require 'support/deferred_garbage_collection'
  RSpec.configure do |config|
    config.before(:all) { DeferredGarbageCollection.start }
    config.after(:all)  { DeferredGarbageCollection.reconsider }
  end
=======
# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
require 'webmock/rspec'
# Add additional requires below this line. Rails is not loaded until this point!

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
#
# Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# Checks for pending migration and applies them before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")
  config.include FactoryGirl::Syntax::Methods

  config.include Devise::TestHelpers, type: :controller
  config.include Warden::Test::Helpers, type: :feature

end

VCR.configure do |c|
  c.cassette_library_dir  = Rails.root.join('spec', 'vcr')
  c.hook_into :webmock
>>>>>>> 046797bd5a67ff45c262271cfae56a1ebe1e84df
end
