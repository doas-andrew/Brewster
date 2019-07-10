# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# only run this file once after migrating - this data should not change
require 'faker'
Beer.destroy_all
User.destroy_all
Review.destroy_all
Favorite.destroy_all

require_relative './fetch_beers.rb'

# validate login with login_name -- username is for UI/UX purposes
romy = User.create(username: 'Romy', name: 'Romy Maghsoudi', password: '123')
will = User.create(username: 'Will', name: 'Williard Jones', password: '123')
asa = User.create(username: 'ASA', name: 'Andrew Allen', password: '123')

Beer.all.each{ |beer| 
	if rand(2) == 1
		Favorite.create(user_id: romy.id, beer_id: beer.id)
	end

	if rand(2) == 1
		Favorite.create(user_id: will.id, beer_id: beer.id)
	end

	if rand(2) == 1
		Favorite.create(user_id: asa.id,  beer_id: beer.id)
	end
}

100.times do
	User.all[rand(3)].reviews <<  Review.create(rating: rand(1..5), title: Faker::Quote.unique.robin, content: Faker::Quote.famous_last_words, beer: Beer.all[rand(30)] ) 
end
