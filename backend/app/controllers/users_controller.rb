class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if(@user.save)
			#generate token and login
			render json: { user: @user }
		else
			render json: { errors: @user.errors.full_messages }
		end
	end

	private
	def user_params
		params.require(:user).permit(:name, :username, :password)
	end
end
