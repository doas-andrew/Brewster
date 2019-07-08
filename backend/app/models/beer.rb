class Beer < ApplicationRecord
	has_many :reviews
	has_many :favorites

	def self.top_beers
		Beer.all.sort_by{ |beer| beer.favoriters.length }.slice(0, 5)
	end

	# returns array of Users who have written Reviews for this Beer
	def reviewers
		self.reviews.map(&:user)
	end

	# returns array of Users who have Favorited this Beer
	def favoriters
		self.favorites.map(&:user)
	end
end
