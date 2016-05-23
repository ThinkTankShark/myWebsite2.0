source 'https://rubygems.org'

ruby '2.3.1'
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

# heroku add-on
#  new relic analytics
gem 'newrelic_rpm'
gem "figaro"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem "rails-erd"
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
