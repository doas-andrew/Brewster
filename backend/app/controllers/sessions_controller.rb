class SessionsController < ApplicationController

  def authenticate
    @user = User.find_by(login_name: params[:login_name])

    #     token = JWT.encode({user_id: @user.id}, 'mys3cr3t')
    #     render json: {token: token}, status: :ok 

    if @user && @user.authenticate(params[:password])
    	render json: { token: 'success', user_id: @user.id }, status: :ok
    else
        render json: {errors: ['Incorrect username or password.']}, status: :unauthorized
    end
  end
end
