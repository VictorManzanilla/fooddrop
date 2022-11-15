class Api::V1::UsersController < ApplicationController
    

    # def index
    #     users = User.all 
    #     # byebug
    #     render json: users
    # end  
   


    def create
        user = User.create(user_params)
        
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
        render json: {user: user, token: token}
       else
        render json: {errors: user.errors.full_messages}
       end
    end
    def login
        user = User.find_by(username: user_params[:username])

        if user && user.authenticate(user_params[:password])
            token = encode_token({user_id: user.id})
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    # def show
    #     if user
    #         render json: user
    #     else
    #         render json: user.errors
    #   end
    # end

    # def update
    #     user = User.find(params[:id])
    #     user.update(user_params)
    #     render json: user
    # end

    # def destroy
    #     user = User.find(params[:id])
    #     user.destroy
    #     render json: {message: 'User deleted'}
    # end
    # def user_params
    #     params.require(:user).permit(:first_name, :last_name, :age, :email, :username, :password_digest)
    # end


    private

  
    def user_params
        params.require(:user).permit(:username, :password_digest)
    end

end
