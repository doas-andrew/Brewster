import React, { Component, Fragment } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft, FaTimesCircle } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

const loggedIn = !!localStorage.getItem('brewster_token')

class BeerSpecs extends Component {

	state = { showReviewForm: false }

	renderReviewForm = ()=>
		<form id='review-form' onSubmit={this.props.submitReview}>
			<FaTimesCircle className="close-btn" onClick={ e => loggedIn ? this.setState({ showReviewForm: !this.state.showReviewForm }) : null } />
			<strong>Leave a Review!</strong>
			<textarea id='showBeer-review-input' rows='5' cols='25' name="content" placeholder=' Type your review here'></textarea>
			
			<br/> &nbsp; &nbsp;

			<strong>Rating </strong> &nbsp;
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

	render() {
		return (
			<div id="showBeer">
				<div className="row">

					<div id="showBeer-labels" className="col-5">
						<strong>Alcohol Content (ABV)</strong><br/>
						<strong>Bitterness (IBU)</strong><br/>
						<strong>Acidity (Ph)</strong>

						<br/><br/>

						<FaHeart
							className='heart'
							onClick={ ()=> loggedIn ? this.props.handleFav() : null }
							style={{ color: this.props.checkFav() ? 'red' : 'grey' }}
						/> {this.props.beer.favorites.length}

						&nbsp; &nbsp; &nbsp;

						<FaEdit
							className="notepad"
							onClick={ e => loggedIn ? this.setState({ showReviewForm: !this.state.showReviewForm }) : null }
							style={{ color: this.state.showReviewForm ? 'DodgerBlue' : 'grey' }}
						/> {this.props.beer.reviews.length}
						
						<br/><br/>

						<span id="close-showBeer" onClick={this.props.closeBeerSpecs}><FaChevronCircleLeft />&nbsp; Back</span>
					</div>

					<div className="col item" style={{ backgroundImage: `url(${this.props.beer.image_url})` }} ></div>

					<div id="showBeer-values" className="col-5">
						<div className="row">
							<div className="col-2">
								<strong>{this.props.beer.abv}</strong><br/>
								<strong>{this.props.beer.ibu}</strong><br/>
								<strong>{this.props.beer.ph}</strong><br/>
							</div>

							<div className="col-3">
								{ loggedIn && this.state.showReviewForm ? this.renderReviewForm() : null }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BeerSpecs
