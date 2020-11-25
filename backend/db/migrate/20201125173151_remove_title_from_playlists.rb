class RemoveTitleFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :title, :string
  end
end
