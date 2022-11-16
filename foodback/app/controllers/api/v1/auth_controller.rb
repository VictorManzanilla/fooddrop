class Api::V1::AuthController < ApplicationController
 
  #   def create
  #     user = User.find_by(username: params[:username])
  #     if user && user.authenticate(params[:password])
  #       render json: user
  #     else
  #       render json: { error: 'Invalid username or password.'}
  #     end
  #  end

  # def create
  #   user = User.find_by(username: params[:username])
  
  #   if user && user.authenticate(params[:password])
  #     payload = { user_id: user.id }
  #     token = JWT.encode(payload, 's3cret', 'HS256')
  #     #send user to FE
  #     render json: { id: user.id, username: user.username, token: token }
  #   else
  #     render json: { error: 'user or pw invalid' }
  #   end
  # end #end of create action




  # def show
  #   token = request.headers[:Authorization].split(' ').last
  #   decoded_token = JWT.decode(token, 's3cret', true, { algorithm: 'HS256'})
  #   user_id = decoded_token[0]['user_id']
  #   user = User.find(user_id)
  #   if user
  #     render json: { id: user.id, username: user.username, token: token }
  #   else
  #     render json: { error: 'invalid token' }
  #   end
  # end #end of show action


  ################### auth code before/ new code below ###########################

  # def login
  #   user = User.find_by(username: params[:username])
  #   if user && user.authenticate(params[:password])
  #     payload = {user_id: user.id}
  #     token = encode_token(payload)
  #     render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}
  #   else
  #     render json: {failure: "login failed"}
  #   end
  # end

  # def auto_login
  #   if session_user
  #     render json: session_user
  #   else
  #     render json: {errors: "No user logged in"}
  #   end
  # end

  # def user_is_authed
  #   render json: {message: "You are authorized"}
  # end

end
  
