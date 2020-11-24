class User < ApplicationRecord
    has_secure_password

    has many :playlists, foreign_key: :owner

    validates :email, uniqueness: true
end
