import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import '../stylesheets/ReviewsContainer.css';

class ReviewsContainer extends Component {

	renderReviews = ()=> this.props.reviews.map( review => 
		<Card bg="secondary" className="review-card">
			<h5>{review.title}</h5>
			<p>{review.content}</p>
			<p>Rating: {review.rating}</p>
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
