class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :updateUserProfileImage]
  before_action :authorize_request, except: [:create, :index]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    puts "created"
    if @user.save
      puts "created"
      @token = encode({user_id: @user.id, username: @user.username});
      render json: {user: @user, token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def updateUserProfileImage
    @current_user.user_img= user_params[:user_img]
    puts @current_user.to_json
    if @current_user.save
      puts "here2"
      @token = encode({user_id: @current_user.id, username: @current_user.username});
      render json: {user: @current_user, token: @token}, status: :created, location: @current_user
    else
      puts "error"
      puts @user.errors.full_messages
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :user_img, :password)
    end

    # def param
    #   params.require(:user).permit(:user_img)
    # end
end
