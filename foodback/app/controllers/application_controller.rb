class ApplicationController < ActionController::API
 
include ActionController::Helpers
helper_method :logged_in?, :current_user


   def logged_in?
    !!current_user
   end


   def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
   end


    # def encode_token(payload)
    #     JWT.encode(payload, 'secret')
    # end
private

# def secret
#     ENV["JWT_SECRET"]
#   end

    # def session_user
    #     decoded_hash = decoded_token
    #     if !decoded_hash.blank?
    #         user_id = decoded_hash[0]['user_id']
    #         @user = User.find_by(id: user_id)
    #     else
    #         nil
    #     end
    # end

    # def auth_header
    #     request.headers['Authorization']
    # end

    # def decoded_token
    #     if auth_header
    #         token = auth_header.split('')[1]
    #         begin
    #             JWT.decoded(token, 'my_secret', true, algorithm: 'HS256')
    #         rescue JWT::DecodedError
    #             []
    #         end
    #     end
    # end

    # def logged_in?
    #     !!session_user
    # end
    
    #    def require_login
    #     render json: {messages: 'Please log in'}, status: :unauthorized unless logged_in?
    #    end
end
