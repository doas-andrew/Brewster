class BeersController < ApplicationController

	def index
		render json: Beer.all
	end

	def show
		render json: Beer.find(params[:id])
	end

	def top_beers
		render json: Beer.top_beers
	end

# BEER CLASS END
end
