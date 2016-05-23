Rails.application.routes.draw do

  root 'home#index'
  get  '/contact' => 'home#contact'

  get '/blogs' => 'blogs#index'

  # devise_for :users, class_name: 'FormUser', :controllers => { omniauth_callbacks: 'omniauth_callbacks', registrations: 'registrations' }

  # resources 'users', except: [:index] do
  #   resources :blogs, except: [:index]
  # end
end
