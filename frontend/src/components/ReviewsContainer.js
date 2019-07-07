import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import '../stylesheets/ReviewsContainer.css';

class ReviewsContainer extends Component {

	renderReviews = ()=> this.props.reviews.map( review => 
		<Card bg="secondary" className="review-card">
			<h5>{review.title}</h5>
			<p>{review.content}</p>
		</Card>
	)

	render() {
		console.log(this.props.reviews)
		return (
			<div id="reviews-container" className="" >
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
				{ this.renderReviews() }
			</div>
		)
	}
}

export default ReviewsContainer
