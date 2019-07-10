class BeerSerializer < ActiveModel::Serializer
	has_many :reviews
	has_many :favorites

  attributes :id, :name, :tagline, :description, :first_brewed, :image_url, :abv, :ibu, :ph
end
