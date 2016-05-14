source 'https://rubygems.org'

<<<<<<< HEAD
gemspec

require File.expand_path 'spec/support/detect_rails_version', File.dirname(__FILE__)

rails_version = detect_rails_version
gem 'rails', rails_version

gem 'jquery-ui-rails', rails_version[0] == '3' ? '~> 4.0' : '~> 5.0'

gem 'test-unit', '~> 3.0' if rails_version[0] == '3'

if rails_version == '> 5.x'
  # Note: when updating this list, be sure to also update the README
  gem 'ransack',    github: 'activerecord-hackery/ransack'
  gem 'kaminari',   github: 'amatsuda/kaminari', branch: '0-17-stable'
  gem 'draper',     github: 'audionerd/draper', branch: 'rails5', ref: 'e816e0e587'
  gem 'formtastic', github: 'justinfrench/formtastic'
  gem 'activemodel-serializers-xml', github: 'rails/activemodel-serializers-xml' # drapergem/draper#697
  gem 'rack-mini-profiler', github: 'MiniProfiler/rack-mini-profiler'
  gem 'database_cleaner',  github: 'DatabaseCleaner/database_cleaner'
  gem 'activerecord-jdbc-adapter', github: 'jruby/activerecord-jdbc-adapter', platforms: :jruby
end

gem 'mime-types', '< 3' # Remove this line when we drop support for Ruby 1.9

# Optional dependencies
gem 'cancan'
gem 'devise', rails_version == '> 5.x' ? '> 4.x' : '~> 3.5'
gem 'draper' if rails_version != '> 5.x'
gem 'pundit'

# Utility gems used in both development & test environments
gem 'rake', require: false
gem 'parallel_tests'

# Debugging
gem 'pry'                                   # Easily debug from your console with `binding.pry`

group :development do
  # Debugging
  gem 'better_errors'                       # Web UI to debug exceptions. Go to /__better_errors to access the latest one
  gem 'binding_of_caller', platforms: :mri  # Retrieve the binding of a method's caller in MRI Ruby >= 1.9.2

  # Performance
  gem 'rack-mini-profiler' if rails_version != '> 5.x' # Inline app profiler. See ?pp=help for options.
  gem 'flamegraph', platforms: :mri         # Flamegraph visualiztion: ?pp=flamegraph

  # Documentation
  gem 'yard'                                # Documentation generator
  gem 'redcarpet', platforms: :mri          # Markdown implementation (for yard)
  gem 'kramdown', platforms: :jruby         # Markdown implementation (for yard)
end

group :test do
  gem 'capybara'
  gem 'simplecov', require: false           # Test coverage generator. Go to /coverage/ after running tests
  gem 'coveralls', require: false           # Test coverage website. Go to https://coveralls.io
  gem 'cucumber-rails', require: false
  gem 'cucumber', '1.3.20'
  gem 'database_cleaner' if rails_version != '> 5.x'
  gem 'guard-rspec', require: false
  gem 'jasmine'
  gem 'jslint_on_rails'
  gem 'launchy'
  gem 'rails-i18n'                          # Provides default i18n for many languages
  gem 'rspec-rails', '>= 3.5.0.beta1'
  gem 'i18n-spec'
  gem 'shoulda-matchers', '<= 2.8.0'
  gem 'sqlite3', platforms: :mri
  gem 'activerecord-jdbcsqlite3-adapter', platforms: :jruby if rails_version != '> 5.x'
  gem 'poltergeist'
end
=======

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
gem 'jquery-easing-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'puma'
gem 'turbolinks', '~> 5.0.0.beta'
gem 'rails_12factor'
gem 'haml-rails'
gem 'bootstrap-sass'
gem 'modernizr-rails'
gem 'meta-tags', require: 'meta_tags'
gem 'responders', '~> 2.0'
gem 'bh'
gem 'gibbon'
gem 'devise', '~> 3.4'
gem 'devise_invitable'
gem 'omniauth'
gem 'omniauth-facebook'
# gem 'omniauth-github'
gem 'octokit'
# gem 'omniauth-instagram'
# gem 'instagram'
gem 'omniauth-twitter'
gem 'twitter'
gem 'inherited_resources'
gem 'dateslices'
gem 'jazz_hands', github: 'danrabinowitz/jazz_hands', branch: 'use-newer-version-of-pry', groups: [:development, :test]
gem 'omniauth-google-oauth2'
gem 'google-api-client'

#CMS gem
gem 'camaleon_cms'
gem 'camaleon_mailchimp'
gem 'camaleon_user_tag'
# gem 'camaleon_google_analytics'
gem "camaleon_post_order", github: 'owen2345/camaleon-post-order-plugin'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end


group :development do
  gem 'happy_seed'
end

group :development, :test do
  gem 'sqlite3'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'capybara'
  gem 'cucumber-rails', require: false
  gem 'guard-rspec'
  gem 'guard-cucumber'
  gem 'database_cleaner'
  gem 'spring-commands-rspec'
  gem 'spring-commands-cucumber'
  gem 'quiet_assets'
  gem 'launchy'
  gem 'vcr'
  gem 'faker'
  gem 'dotenv-rails'
  gem 'rdiscount'
end

group :test do
  gem 'webmock'
end

group :production do
  gem 'pg'
end


#################### Camaleon CMS include all gems for plugins and themes ####################
require './lib/plugin_routes'
instance_eval(PluginRoutes.draw_gems)
>>>>>>> 046797bd5a67ff45c262271cfae56a1ebe1e84df
