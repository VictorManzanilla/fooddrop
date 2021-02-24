class Api::V1::RestaurantsController < ApplicationController

    def index
        restaurant = Restaurant.all 
        render json: restaurant
    end
end
