class User < ApplicationRecord
    has_secure_password

    has_many :playlists, foreign_key: :owner

    validates :email, uniqueness: true
end
