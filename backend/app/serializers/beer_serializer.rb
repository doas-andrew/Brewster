class BeerSerializer < ActiveModel::Serializer
	has_many :reviews


  attributes :id, :name, :tagline, :description, :first_brewed, :image_url, :abv, :ibu, :ph

end
