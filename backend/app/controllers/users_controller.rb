class UsersController < ApplicationController

	def index
		render json: User.all, each_serializer: UserSerializer
	end

	def show
		@user = User.find(params[:id])
		render json: @user, each_serializer: UserSerializer
	end

	def create
		@user = User.new(user_params)
		if(@user.save)
			#generate token and login
			render json: { user: @user }
		else
			render json: { errors: @user.errors.full_messages }
		end
	end

	def profile
		@user = User.find(params[:id])
		if @user
			render json: @user.profile_info
		else
			render json: {}, status: :not_found
		end
	end

	private
	def user_params
		params.require(:user).permit(:name, :username, :password)
	end
end
