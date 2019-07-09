import React, { Component } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft } from 'react-icons/fa'

class BeerSpecs extends Component {

	state = {
		fav: false,
		beer: this.props.beer
	}
	handleFav = () => {
		let method;
		let user_id = localStorage.getItem('brewster_id')
		let url= 'http://localhost:3000/favorites/'
		if(this.checkFav()) {
			method = 'DELETE'
			let fav = this.state.beer.favorites.find(fav => fav.user_id == user_id)
			url += fav.id
			fetch(url, {
				method: method
			})
			.then(res => {
				fetch('http://localhost:3000/beers/'+this.state.beer.id)
				.then(res => res.json())
				.then(res => this.setState({ beer: res }) )
			})
			
		}
		else {
			method = 'POST'
			fetch(url, {
				method: method,
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({ user_id: user_id, beer_id: this.state.beer.id })
			})
			.then(res => res.json())
			.then(res => {
				fetch('http://localhost:3000/beers/'+this.state.beer.id)
				.then(res => res.json())
				.then(res => this.setState({ beer: res }) )
			})
		}
	}

	checkFav = () => {
		return !!this.state.beer.favorites.find(fav => fav.user_id == localStorage.getItem('brewster_id'))
	}

	render() {
		console.log('render')
		return (
			<div id="showBeer">
				<span id="close-showBeer" onClick={this.props.closeBeerSpecs}><FaChevronCircleLeft /></span>
				<br/>
				<div className="row">
					<div id="showBeer-labels" className="col">
						<strong>Alcohol Content (ABV):</strong><br/>
						<strong>Bitterness (IBU):</strong><br/>
						<strong>Acidity (Ph):</strong><br/>
						<br/>
						<span id='heart' style={{ color: this.checkFav() ? 'red' : 'black' }} onClick={this.handleFav}><FaHeart/> </span>{this.state.beer.favorites.length} &nbsp; &nbsp; <span id='rev'><FaEdit/></span> {this.state.beer.reviews.length}
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
