import React, { Component, Fragment } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft } from 'react-icons/fa'
import ReviewCard from './ReviewCard'
import '../stylesheets/Review.css'


const loggedIn = !!localStorage.getItem('brewster_token')

class BeerSpecs extends Component {

	state = {
		beer: this.props.beer,
		rev: false,
		headline: '',
		review: '',
		rating: 1
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

	handleRev = () => {
		this.setState({ rev: !this.state.rev })
	}

	handleHeadChange = (e) => {
		let input = e.target.value
		this.setState({ headline: input })
	}

	checkFav = () => {
		return !!this.state.beer.favorites.find(fav => fav.user_id == localStorage.getItem('brewster_id'))
	}
	handleChange = (e) => {
		let input = e.target.value
		this.setState({ review: input})
	}

	handleRatingChange = (e) => {
		let input = e.target.value
		this.setState({ rating: input })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		fetch('http://localhost:3000/reviews',{
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({
			title: this.state.headline,
			content: this.state.review,
			rating: this.state.rating,
			user_id: localStorage.getItem('brewster_id'),
			beer_id: this.state.beer.id
		})
	})
	.then(e.target.reset())
	.then(e => this.setState({ rev: !this.state.rev}))
	.then(fetch('http://localhost:3000/beers/' + this.state.beer.id)
	.then(res => res.json())
	.then(res => this.setState({ beer: res }))
	)
	}

	render() {
		return (
			<div id="showBeer">
				<div className="row">
					<div id="showBeer-labels" className="col-5">
						<strong>Alcohol Content (ABV)</strong><br/>
						<strong>Bitterness (IBU)</strong><br/>
						<strong>Acidity (Ph)</strong><br/>
						<br/>
						<span id='heart' style={{ color: this.checkFav() ? 'red' : 'black' }} onClick={ ()=> loggedIn ? this.handleFav() : null }><FaHeart/> </span>{this.state.beer.favorites.length} &nbsp; &nbsp; <span id='reviews' onClick={this.handleRev} ><FaEdit/></span> {this.state.beer.reviews.length}
						<br/><br/>
						<span id="close-showBeer" onClick={this.props.closeBeerSpecs}><FaChevronCircleLeft />&nbsp; Back</span>
					</div>

					<div className="col item" style={{ backgroundImage: `url(${this.state.beer.image_url})` }} >
					</div>

					<div id="showBeer-values" className="col-5">
						<strong>{this.state.beer.abv}</strong><br/>
						<strong>{this.state.beer.ibu}</strong><br/>
						<strong>{this.state.beer.ph}</strong><br/>
					</div>
					{this.state.rev ? <form id='showBeer-review' onSubmit={this.handleSubmit}>
					<strong>Leave a Review!</strong><br/>
					<label>Headline:</label><br/>
					<input value={this.state.headline} onChange={this.handleHeadChange}></input>
					<br/>
					<label>Content:</label><br/>
					<textarea id='showBeer-review-input' rows='5' cols='20' placeholder='Type in your review...' onChange={this.handleChange}></textarea><br/>
					<label>Rating: </label>
					<select value={this.state.rating} onChange={this.handleRatingChange}>
					<option value = '1'>1</option>
					<option value = '2'>2</option>
					<option value = '3'>3</option>
					<option value = '4'>4</option>
					<option value = '5'>5</option>
					</select><br/>
					<button type='Submit'>Submit!</button>
					</form> : null }
				</div>
				<div>
				{	this.state.beer.reviews[0] ?  <> <hr/>
					<h4>Reviews</h4>
					<div id='review-showcase'>
						{ this.state.beer.reviews.map(review => <ReviewCard review={review} />)}
					</div>		</>	: null
				}
				</div>
				
			</div>	
		)
	}
}

export default BeerSpecs
