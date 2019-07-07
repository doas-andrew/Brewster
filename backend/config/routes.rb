Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :beers, only: [:index, :show]
  resources :favorites
  resources :reviews
  resources :users

  post '/login', to: "sessions#authenticate"
  get '/users/profile/:id', to: "users#profile"
end
