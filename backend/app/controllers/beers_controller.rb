class BeersController < ApplicationController

	def index
		render json: Beer.all

	end

	def show
		@beer = Beer.find(params[:id])
		if @beer
			render json: @beer
		else
			render 'wot'
		end
	end

# BEER CLASS END
end
