class AddSongIdIndexToPlaylists < ActiveRecord::Migration[6.0]
  def change
    add_index :playlists, :song_id
  end
end
