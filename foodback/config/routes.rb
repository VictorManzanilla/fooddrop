Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :restaurants
       resources :users, only: [:create]
       #resources gives you all 7 RESTFUL routes
       # resources :favorites
      # post '/auth', to: 'auth#create'
      # get '/current_user', to: 'auth#show'
      ############recent old route#################
      # post "/login", to: "auth#login"
      # get "/auto_login", to: "auth#auto_login"
      # get "/user_is_authed", to: "auth#user_is_authed"
    ##################new routes#####################
    post "/login", to: "users#login"
    end
  end
end
