Rails.application.routes.draw do
  resources :teams
  resources :rikishis, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # get "*path", to: "application#hello_world"
end
