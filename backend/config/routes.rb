Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get 'beers/top-beers', to: 'beers#top_beers'
  get '/users/profile/:id', to: "users#profile"
  get '/beers/specs/:id', to: 'beers#beer_specs_stats'
  get '/beers/reviews/:id', to: 'beers#beer_reviews'
  
  resources :beers, only: [ :index, :show  ]
  resources :favorites, only: [:create, :destroy]
  resources :reviews, only: [:create, :destroy]
  resources :users, only: [:create, :update]

  post '/login', to: "sessions#authenticate"
end
