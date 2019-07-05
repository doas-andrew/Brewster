class User < ApplicationRecord
	has_many :favorites
	has_many :reviews
	has_many :beers, through: :favorites
end
