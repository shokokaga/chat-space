Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]


end
