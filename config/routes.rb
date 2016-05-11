Rails.application.routes.draw do
  root 'home#index'

  namespace :admin do
    # get "/stats" => "stats#stats"
    devise_scope :admin_user do
      get '/stats/:scope' => "stats#stats", as: :admin_stats
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, class_name: 'FormUser', :controllers => { omniauth_callbacks: 'omniauth_callbacks', registrations: 'registrations' }
  post '/signup' => 'splash#signup', as: :splash_signup
  # get '/splash' => 'splash#index'
  # root 'splash#index'
  # get '/setup' => 'setup#index'
end
