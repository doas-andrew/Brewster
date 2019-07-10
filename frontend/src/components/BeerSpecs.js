import React, { Component, Fragment } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

const loggedIn = !!localStorage.getItem('brewster_token')

class BeerSpecs extends Component {

	state = {
		beer: this.props.beer,
		rev: false,
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
		console.log('i have been touched!')
		this.setState({ rev: !this.state.rev })
	}

	checkFav = () => {
		return !!this.state.beer.favorites.find(fav => fav.user_id == localStorage.getItem('brewster_id'))
	}
	handleChange = (e) => {
		let input = e.target.value
		this.setState({ review: input})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		let form = e.target
		fetch('http://localhost:3000/reviews',{
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({
			title: this.state.beer.name,
			content: form.content.value,
			rating: form.rating.value,
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

	renderReviewForm = ()=>
		<form id='showBeer-review' onSubmit={this.handleSubmit}>
			<strong>Leave a Review!</strong>
			<textarea id='showBeer-review-input' rows='5' cols='25' onChange={this.handleChange} name="content" placeholder=' Type your review here'></textarea>
			<br/>
			&nbsp; &nbsp; <strong>Rating </strong> &nbsp;
			<select name="rating">
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>
			&nbsp; &nbsp; &nbsp;
			<Button type='submit' variant="secondary">Submit</Button>
		</form>

	renderReviewList = ()=>
		<div>
			<hr/>
			<h4>Reviews</h4>
			<ul>
				{ this.state.beer.reviews.map(review => <li>{review.content}<button>X</button></li>) }
			</ul>
		</div>

	render() {
		return (
			<div id="showBeer">
				<div className="row">

					<div id="showBeer-labels" className="col-5">
						<strong>Alcohol Content (ABV)</strong><br/>
						<strong>Bitterness (IBU)</strong><br/>
						<strong>Acidity (Ph)</strong>

						<br/><br/>

						<span id='heart' style={{ color: this.checkFav() ? 'red' : 'grey' }} onClick={ ()=> loggedIn ? this.handleFav() : null }>
							<FaHeart/>
						</span> {this.state.beer.favorites.length}
						&nbsp; &nbsp; &nbsp;
						<span id='reviews' style={{ color: this.state.rev ? 'DodgerBlue' : 'grey' }} onClick={ e => loggedIn ? this.setState({ rev: !this.state.rev }) : null }>
							<FaEdit/>
						</span> {this.state.beer.reviews.length}
						
						<br/><br/>

						<span id="close-showBeer" onClick={this.props.closeBeerSpecs}><FaChevronCircleLeft />&nbsp; Back</span>
					</div>

					<div className="col item" style={{ backgroundImage: `url(${this.state.beer.image_url})` }} ></div>

					<div id="showBeer-values" className="col-5">
						<div className="row">
							<div className="col-3">
								<strong>{this.state.beer.abv}</strong><br/>
								<strong>{this.state.beer.ibu}</strong><br/>
								<strong>{this.state.beer.ph}</strong><br/>
							</div>

							<div className="col">
								{ this.state.rev && loggedIn ? this.renderReviewForm() : null }
							</div>
						</div>
					</div>
				</div>
					{ this.state.beer.reviews[0] ? this.renderReviewList() : null }
			</div>
		)
	}
}

export default BeerSpecs
