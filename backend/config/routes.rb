Rails.application.routes.draw do
  resources :playlists do
    resources :songs
  end
  resources :songs
  resources :users do
    resources :playlists
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
