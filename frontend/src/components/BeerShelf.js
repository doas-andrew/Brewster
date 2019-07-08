import React, { Component } from 'react'
import '../stylesheets/BeerShelf.css';
import BeerSpecs from './BeerSpecs'

class BeerShelf extends Component {

	state = {
		showBeer: false
	}

	componentDidMount(){
		this.setState({title: this.props.title})
	}

	changeShowBeer = (beer)=> {
		this.setState({ showBeer: beer, title: this.checkBeerName(beer.name) })
	}

	renderBeers = ()=> {
		return (
			<div className="beer-scroll-grid">
				{this.props.beers.map( beer =>
					<div className="item" onClick={ e => this.changeShowBeer(beer) } style={{ backgroundImage: `url(${beer.image_url})` }} >
						<div className="beer-info">
							<h5>{this.checkBeerName(beer.name)}</h5>
						</div>
					</div>
				)}
			</div>
		)
	}

	checkBeerName = (string)=> {
		if(string.includes('('))
			string = string.slice(0, string.indexOf('('))
		return string
	}

	closeBeerSpecs = ()=> {
		this.setState({
			showBeer: false,
			title: this.props.title
		})
	}

	render() {
		return (
			<div className="beer-shelf">
				<h3>{this.props.title}</h3>
				<hr/>
				{
					this.state.showBeer ? 
						<BeerSpecs closeBeerSpecs={this.closeBeerSpecs} beer={this.state.showBeer} />
						:
						this.renderBeers()
				}
		  </div>
		)
	}
}

export default BeerShelf