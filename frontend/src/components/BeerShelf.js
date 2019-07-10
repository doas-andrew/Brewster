import React, { Component, Fragment } from 'react'
import '../stylesheets/BeerShelf.css';
import BeerSpecs from './BeerSpecs'

class BeerShelf extends Component {

	state = {
		title: this.props.title,
		showBeer: false,
		showRevs: false
	}

	submitReview = e => {
		e.preventDefault()
		let form = e.target

		fetch('http://localhost:3000/reviews',{
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: this.state.showBeer.name,
				content: form.content.value,
				rating: form.rating.value,
				user_id: localStorage.getItem('brewster_id'),
				beer_id: this.state.showBeer.id
			})
		})
		.then(res => this.getShowBeer())
		form.reset()
	}

	checkFav = () => !!this.state.showBeer.favorites.find(fav => fav.user_id == localStorage.getItem('brewster_id'))

	handleFav = () => {
		let url= 'http://localhost:3000/favorites/'
		let userId = localStorage.getItem('brewster_id')
		let fetchHash = {}

		if(this.checkFav()) {
			url += this.state.showBeer.favorites.find(fav => fav.user_id == userId).id
			fetchHash.method = 'DELETE'
		}
		else {
			fetchHash.method = 'POST'
			fetchHash.headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
			fetchHash.body = JSON.stringify({ user_id: userId, beer_id: this.state.showBeer.id })
		}

		fetch(url, fetchHash)
		.then(res => this.getShowBeer())
	}

	getShowBeer = (id=this.state.showBeer.id)=> {
		return fetch('http://localhost:3000/beers/'+id)
		.then(res => res.json())
		.then(res => this.setState({  title: res.name, showBeer: res, showRevs: res.reviews }) )
	}

	renderBeers = ()=> {
		return (
			<div className="beer-scroll-grid">
				{this.props.beers.map( beer =>
					<div className="item" onClick={ e => this.getShowBeer(beer.id)} style={{ backgroundImage: `url(${beer.image_url})` }} >
						<h5>{this.checkBeerName(beer.name)}</h5>
					</div>
				)}
			</div>
		)
	}

	checkBeerName = (string)=> {
		if(string.includes('('))
			string = string.slice(0, string.indexOf('('))
		if(string.length > 22)
			string = string.slice(0,22)+'…'
		return string
	}

	closeBeerSpecs = ()=> {
		this.setState({
			title: this.props.title,
			showBeer: false,
			showRevs: false
		})
	}

	renderReviewList = ()=>
		<div className="review-list">
			<h4>Reviews</h4>
			<ul style={{ listDecoration: 'none' }}>
				{ this.state.showBeer.reviews.map(review => <li>{review.content} <button>x</button></li>) }
			</ul>
		</div>

	render() {
		return (
			<Fragment>
				<div className="beer-shelf">
					<h3>{this.state.title}</h3>
					<hr/>
					{ this.state.showBeer ? <BeerSpecs beer={this.state.showBeer} submitReview={this.submitReview} checkFav={this.checkFav} handleFav={this.handleFav} closeBeerSpecs={this.closeBeerSpecs} /> : this.renderBeers() }
			  </div>
			  { this.state.showBeer ? this.renderReviewList() : null }
			</Fragment>
		)
	}
}

export default BeerShelf