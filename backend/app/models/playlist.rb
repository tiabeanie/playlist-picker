class Playlist < ApplicationRecord
    has_many :songs
    belongs_to :users
end
