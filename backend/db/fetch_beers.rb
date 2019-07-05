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