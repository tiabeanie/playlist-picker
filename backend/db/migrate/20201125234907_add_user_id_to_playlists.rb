class AddUserIdToPlaylists < ActiveRecord::Migration[6.0]
  def change
    add_index :playlists, :user_id
  end
end
