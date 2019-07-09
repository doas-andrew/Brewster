import React, { Component } from 'react'
import { FaHeart, FaEdit, FaChevronCircleLeft } from 'react-icons/fa'

class BeerSpecs extends Component {

	state = {
		faves: 0,
		revs: 0
	}

	componentDidMount() {
		fetch('http://localhost:3000/beers/specs/'+this.props.beer.id)
		.then(res => res.json())
		.then(res => this.setState({ faves: res.num_favorites, revs: res.num_reviews }))
	}

	render() {
		console.log(this.props.beer.favorites)
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
						<span><FaHeart/> {this.props.faves} &nbsp; &nbsp; <FaEdit/> {this.state.revs}</span>
					</div>

					<div className="col">
						<img src={this.props.beer.image_url} />
					</div>

					<div id="showBeer-values" className="col">
					<strong>{this.props.beer.abv}</strong><br/>
					<strong>{this.props.beer.ibu}</strong><br/>
					<strong>{this.props.beer.ph}</strong><br/>
					</div>
				</div>
			</div>
		)
	}
}

export default BeerSpecs
