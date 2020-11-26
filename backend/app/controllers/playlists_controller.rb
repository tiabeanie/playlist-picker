class PlaylistsController < ApplicationController
    def new
        playlist = Playlist.new
    end

    def create
        playlist = Playlist.new(playlist_params)
        if playlist.save
            render json: playlist, except: [:created_at, :updated_at]
        else
            render json: {message: "Playlist Failed"}
        end
    end

    def index
        user_id = params[:user_id]
        user = User.find_by(id: params[:id])
        playlists = user.playlists
        render json: playlists, include: [:song]
    end

    def destroy
        playlist_id = params[:id]
        playlist = Playlist.find(playlist_id)
        playlist.destroy
    end


private
    def playlist_params
      params.require(:playlist).permit(:user_id, :song_id)
    end
end