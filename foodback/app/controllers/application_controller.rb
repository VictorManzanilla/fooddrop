class ApplicationController < ActionController::API
 
include ActionController::Helpers
helper_method :logged_in?, :current_user


   def logged_in?
    !!current_user
   end


   def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
   end



end
