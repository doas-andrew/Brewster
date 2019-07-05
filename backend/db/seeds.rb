# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
Beer.destroy_all

response = RestClient.get 'https://api.punkapi.com/v2/beers'
response = JSON.parse(response)

response.each { |beer|
	Beer.create(
		name: beer['name'], 
		tagline: beer['tagline'],
		description: beer['description'],
		first_brewed: beer['first_brewed'],
		image_url: beer['image_url'],
		abv: beer['abv'],
		ibu: beer['ibu'],
		ph: beer['ph']
	)
}
