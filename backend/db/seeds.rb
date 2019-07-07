# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# only run this file once after migrating - this data should not change
# require_relative './fetch_beers.rb'

User.destroy_all
Review.destroy_all
Favorite.destroy_all

# validate login with login_name -- username is for UI/UX purposes
romy = User.create(username: 'Romy', name: 'Romy Maghsoudi', password: '123')
will = User.create(username: 'Will', name: 'Williard Jones', password: '123')
asa = User.create(username: 'ASA', name: 'Andrew Allen', password: '123')

romy.favorites << [ Favorite.create(beer: Beer.all[0]), Favorite.create(beer: Beer.all[2]) ]
Beer.all.each {|beer| will.favorites << Favorite.create(beer: beer) }
asa.favorites  << [ Favorite.create(beer: Beer.all[1]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4]), Favorite.create(beer: Beer.all[4])  ]

asa.reviews  << [ Review.create(rating: 0, title: "Andrew's review", content: "This beer is garbo.", beer: Beer.all[0]) ]
romy.reviews << [ Review.create(rating: 5, title: "Romy's review", content: "Don't listen to Andrew. This beer is GREAT.", beer: Beer.all[0]) ]
will.reviews << [ Review.create(rating: 1, title: "Will's review", content: "Cures cancer but leaves a terrible after-taste. Not worth.", beer: Beer.all[5]) ]
