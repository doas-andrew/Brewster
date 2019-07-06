class Beer < ApplicationRecord
	has_many :reviews
	has_many :favorites

	# returns array of Users who have written Reviews for this Beer
	def reviewers
		self.reviews.map(&:user)
	end

	# returns array of Users who have Favorited this Beer
	def favoriters
		self.favorites.map(&:user)
	end
end
