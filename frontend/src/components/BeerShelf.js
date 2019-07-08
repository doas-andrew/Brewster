import React, { Component } from 'react'
import '../stylesheets/BeerShelf.css';

class BeerShelf extends Component {

	renderBeers = ()=> this.props.beers.map( beer => 
		<div className="item" onClick={ e => this.showBeerInfo(beer) } style={{ backgroundImage: `url(${beer.image_url})` }} >
			<div className="beer-info">
				<h5>{this.checkBeerName(beer.name)}</h5>
			</div>
		</div>
	)

	checkBeerName = (string)=> {
		if(string.includes('('))
			string = string.slice(0, string.indexOf('('))
		return string
	}

	showBeerInfo = (beer)=> {
		// modal popup?
		console.log(beer)
	}

	render() {
		return (
			<div className="beer-shelf">
				<h3>{this.props.title}</h3>
				<hr/>
		  	<div className="beer-scroll-grid">
		  		{this.renderBeers()}
		  	</div>
		  </div>
		)
	}
}

export default BeerShelf