class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs, except: [:created_at, :updated_at]
    end

    def show
        song = Song.find_by(id: params[:id])
        if song
            render json: songs, except: [:created_at, :updated_at]
        else
            render json: {message: "song not found."}
        end
    end
end