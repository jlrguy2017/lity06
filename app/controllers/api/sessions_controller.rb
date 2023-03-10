class Api::SessionsController < ApplicationController
  def email
    @user = User.find_by(email: params[:email])
    if @user
      render '/api/users/show'
    else
      render json: [], status: 401
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      log_in(@user)
      render '/api/users/show'
    else 
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render '/api/users/show'
    else
      render json: ["There is no user logged in currently."], status: 404
    end
  end
end
