class Api::V1::SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:user][:email])

        if user && user.authenticate(params[:user][:password])
            session[:id] = user.id
            render json:{status: 201, user: user, logged_in: true}
        else
            render json: {status: 401, message: "user not found"}
        end
    end

    def logout
        reset_session
        render json: {status: 200, user: {}, logged_in: false}
    end


end
