class RemoveOwnerFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :owner, :integer
  end
end
