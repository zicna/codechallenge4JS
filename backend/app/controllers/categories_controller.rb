class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: CategorySerializer.new(categories, {:include =>[:arts]})
    end

    def create
        byebug
        category = Category.new(category_params)
    end

    private
    def category_params
        params.require(:category).premit(:name, :artist, :year, :image)
    end
end
