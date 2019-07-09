import React, { Component } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft } from 'react-icons/fa'

const loggedIn = !!localStorage.getItem('brewster_token')

class BeerSpecs extends Component {

	state = {
		beer: this.props.beer
	}

	fetchBeerState = ()=> {
		fetch('http://localhost:3000/beers/'+this.state.beer.id)
		.then(res => res.json())
		.then(res => this.setState({ beer: res }) )
	}

	handleFav = () => {
		let url= 'http://localhost:3000/favorites/'
		let c_user_id = localStorage.getItem('brewster_id')
		let fetchHash = {}

		if(this.checkFav()) {
			url += this.state.beer.favorites.find(fav => fav.user_id == c_user_id).id
			fetchHash.method = 'DELETE'
		}
		else {
			fetchHash.method = 'POST'
			fetchHash.headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
			fetchHash.body = JSON.stringify({ user_id: c_user_id, beer_id: this.state.beer.id })
		}
		fetch(url, fetchHash)
		.then(res => this.fetchBeerState() )
	}

	checkFav = () => {
		return !!this.state.beer.favorites.find(fav => fav.user_id == localStorage.getItem('brewster_id'))
	}
	render() {
		return (
			<div id="showBeer">
				<span id="close-showBeer" onClick={this.props.closeBeerSpecs}><FaChevronCircleLeft /></span>
				<br/>
				<div className="row">
					<div id="showBeer-labels" className="col">
						<strong>Alcohol % (ABV)</strong><br/>
						<strong>Bitterness (IBU)</strong><br/>
						<strong>Acidity (Ph)</strong><br/>
						<br/>
						<span id='heart' style={{ color: this.checkFav() ? 'red' : 'black' }} onClick={ ()=> loggedIn ? this.handleFav() : null }><FaHeart/> </span>{this.state.beer.favorites.length} &nbsp; &nbsp; <span id='rev'><FaEdit/></span> {this.state.beer.reviews.length}
					</div>

					<div className="col">
						<img src={this.state.beer.image_url} />
					</div>

					<div id="showBeer-values" className="col">
						<strong>{this.state.beer.abv}</strong><br/>
						<strong>{this.state.beer.ibu}</strong><br/>
						<strong>{this.state.beer.ph}</strong><br/>
					</div>
				</div>
			</div>
		)
	}
}

export default BeerSpecs
