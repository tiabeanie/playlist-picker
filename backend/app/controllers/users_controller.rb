class UsersController < ApplicationController
    def new 
        user = User.new
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user, except: [:created_at, :updated_at]
        else
            render json: {message: "signup incomplete"}
        end
    end

    def show
        user = User.find_by(id: params[:id])
            if user
            render json: user, except: [:created_at, :updated_at]
        else
            render json: {message: "user not found"}
        end
    end

private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
