# if Rails.env.production == 'production' 
#     Rails.application.config.session_store :cookies_store, :key => '_my_cookie_fantasy'

# else
Rails.application.config.session_store :cookies_store, :key => '_my_cookie_fantasy'
# end