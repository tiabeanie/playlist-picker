class AddSongIdToPlaylists < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :song_id, :integer
  end
end
