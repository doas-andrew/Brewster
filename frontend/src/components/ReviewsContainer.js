import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import { FaStar } from 'react-icons/fa';
import '../stylesheets/ReviewsContainer.css';

class ReviewsContainer extends Component {

	getStars = (num)=> {
		let starArray = []
		
		for(let k=0; k<num; k++)
			starArray.push( <FaStar/> )

		return starArray
	}

	renderReviews = ()=> this.props.reviews.map( review => 
		<Card bg="secondary" className="review-card">
			<h5>{review.title}</h5>
			{review.content}<br/>
			<span className="stars">{ this.getStars(review.rating) }</span>
		</Card>
	)

	render() {
		return (
			<div id="reviews-container" className="" >
				<br/>
				<h3>{this.props.title}</h3>
				{ this.renderReviews() }
			</div>
		)
	}
}

export default ReviewsContainer
