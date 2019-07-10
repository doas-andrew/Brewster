class UsersController < ApplicationController

	def index
		render json: User.all, each_serializer: UserSerializer
	end

	def show
		@user = User.find(params[:id])
		render json: @user, each_serializer: UserSerializer
	end

	def create
		@user = User.new(new_user_params)
		if(@user.save)
			#generate token and login
    	render json: { token: 'success', user_id: @user.id }, status: :ok
		else
			render json: { errors: @user.errors.full_messages }
		end
	end

	def update
		@user = User.find(params[:id])

		if @user.update(update_user_params)
			render json: {}, status: :ok
		else
			render json: @user.errors.full_messages, status: :unprocessable_entity
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
	def new_user_params
		params.require(:user).permit(:name, :username, :password)
	end

	def update_user_params
		params.require(:user).permit(:name, :password, :avatar)
	end
end
