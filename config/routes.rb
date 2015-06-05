Rails.application.routes.draw do
  root 'home#index'
  resources :todos, only: [:create, :update]
end