Rails.application.routes.draw do
  resources :books do 
    resources :notes
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/users_img/:id', to: 'users#updateUserProfileImage'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
