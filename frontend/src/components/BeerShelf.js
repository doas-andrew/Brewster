import React, { Component, Fragment } from 'react'
import BeerSpecs from './BeerSpecs'

import { FaTrashAlt, FaStar } from 'react-icons/fa';
import '../stylesheets/BeerShelf.css';


const user_id = localStorage.getItem('brewster_id')

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
		.then(()=> this.getShowBeer())
		form.reset()
	}

	deleteReview = (id)=> {
		fetch('http://localhost:3000/reviews/'+id,{ method: 'DELETE' })
		.then(()=> this.getShowBeer() )
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

	checkBeerName = (string)=> {
		if(string.includes('('))
			string = string.slice(0, string.indexOf('('))
		if(string.length > 15)
			string = string.slice(0,15)+'…'
		return string
	}

	closeBeerSpecs = ()=> {
		this.setState({
			title: this.props.title,
			showBeer: false,
			showRevs: false
		})
	}
	
	renderBeers = ()=> {
		console.log(this.props.beers)
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

	renderReviewList = ()=>
		<div className="review-list">
			<h4>Reviews</h4><hr/>
			<ul style={{ listDecoration: 'none' }}>
				{
					this.state.showBeer.reviews.map(review => 
						<li>
							{ review.user_id == user_id ? <FaTrashAlt onClick={ e => this.deleteReview(review.id)} className="trashcan"/> : null } &nbsp; &nbsp;
							{ review.author } wrote: &nbsp; "{ review.content }" &nbsp; <span className="stars">{ this.getStars(review.rating) }</span>
						</li>) 
				}
			</ul>
		</div>

	getStars = (num)=> {
		let starArray = []
		
		for(let k=0; k<num; k++)
			starArray.push( <FaStar/> )

		return starArray
	}

	render() {
		return (
			<Fragment>
				<div className="beer-shelf">
					<h3>{this.state.title}</h3>
					<hr/>
					{ this.state.showBeer ? <BeerSpecs beer={this.state.showBeer} submitReview={this.submitReview} checkFav={this.checkFav} handleFav={this.handleFav} closeBeerSpecs={this.closeBeerSpecs} /> : this.renderBeers() }
			  </div>
			  { this.state.showBeer.reviews && this.state.showBeer.reviews[0] ? this.renderReviewList() : null }
			</Fragment>
		)
	}
}

export default BeerShelf
