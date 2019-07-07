import React, { Component } from 'react'
import '../stylesheets/BeerShelf.css';

class BeerShelf extends Component {

	renderBeers = ()=> this.props.beers.map( beer => <li key={beer.id}><img className="item" onClick={ e => this.showBeerInfo(beer) } draggable="false" src={beer.image_url} alt="beer"/></li> )

	showBeerInfo = (beer)=> {
		// modal popup?
		console.log(beer)
	}

	render() {
		return (
			<div className="beer-shelf">
		  	<ul className="hs full">
		  		{this.renderBeers()}
		  	</ul>
			</div>
		)
	}
}

export default BeerShelf