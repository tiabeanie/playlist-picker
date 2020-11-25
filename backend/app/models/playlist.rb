class Playlist < ApplicationRecord
    belongs to :user
    belongs to :song
end
