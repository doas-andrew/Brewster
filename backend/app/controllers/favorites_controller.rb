class FavoritesController < ApplicationController

  def create
    @fav = Favorite.new(fav_params)
    if @fav.save
      render json: @fav
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def destroy
    @fav = Favorite.find(params[:id])
    @fav.destroy
  end

  private

  def fav_params
    params.permit(:user_id, :beer_id)
  end

end
