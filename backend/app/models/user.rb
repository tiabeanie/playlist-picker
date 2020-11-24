class User < ApplicationRecord
    has_secure_password

    has_many :playlists, foreign_key: :owner
    has_many :songs, through: :playlists

    validates :email, uniqueness: true
end
