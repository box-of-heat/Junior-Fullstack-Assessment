Rails.application.routes.draw do
  # devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'pets', to: 'pets#index', as: 'pets'
      post 'pets', to: 'pets#create', as: 'create_pet'
    end
  end
end
