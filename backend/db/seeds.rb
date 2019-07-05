# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '../config/brewerydb_api.rb'

User.destroy_all
Beer.destroy_all

# p Brewery_DB
response = RestClient.get Brewery_DB[:URL]+Brewery_DB[:KEY]
response = JSON.parse(response)
data = response['data']

for k in (0..10) do
	Beer.create(
		api_id: data[k]['id'], 
		name:data[k]['name'], 
		# img_url: data[k]['labels']['medium'], 
		description: data[k]['style']['description'], 
		abv: data[k]['abv'].to_f, 
		isOrganic: data[k]['isOrganic'] == 'Y', 
		isRetired: data[k]['isRetired'] == 'Y'
	)
end
