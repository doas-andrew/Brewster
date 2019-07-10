class ReviewsController < ApplicationController

  def create
    @rev = Review.new(review_params)
    if @rev.save
      render json: @rev
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.destroy(params[:id])
  end

  private

  def review_params
    params.permit(:user_id, :beer_id, :content, :rating, :title)
  end

end
