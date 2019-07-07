import React, { Component } from 'react'
import '../stylesheets/BeerShelf.css';

class BeerShelf extends Component {

	renderBeers = ()=> this.props.beers.map( beer => 
		<div className="item" onClick={ e => this.showBeerInfo(beer) } style={{ backgroundImage: `url(${beer.image_url})` }} ></div>
	)

	showBeerInfo = (beer)=> {
		// modal popup?
		console.log(beer)
	}

	render() {
		return (
			<div className="beer-shelf">
		  	<div className="scroll-grid">
		  		{this.renderBeers()}
		  	</div>
			</div>
		)
	}
}

export default BeerShelf