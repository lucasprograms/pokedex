Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [:create, :index, :show]
  end
end
