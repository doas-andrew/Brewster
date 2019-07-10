import React, { Component } from 'react'
import '../stylesheets/BeerShelf.css';
import BeerSpecs from './BeerSpecs'

class BeerShelf extends Component {

	state = {
		title: '',
		showBeer: false
	}

	// beers = this.props.beers ? this.props.beers : []

	componentDidMount(){
		this.setState({title: this.props.title})
	}

	changeShowBeer = (beer)=> {
		fetch('http://localhost:3000/beers/' + beer.id)
		.then(res => res.json())
		.then(res => this.setState({ showBeer: res, title: this.checkBeerName(beer.name) }) )
	}

	renderBeers = ()=> {
		return (
			<div className="beer-scroll-grid">
				{this.props.beers.map( beer =>
					<div className="item" onClick={ e => this.changeShowBeer(beer) } style={{ backgroundImage: `url(${beer.image_url})` }} >
						<h5>{this.checkBeerName(beer.name)}</h5>
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
			<div className="beer-shelf" style={{ height: this.state.showBeer ? 'auto' : "420px", paddingBottom: this.state.showBeer ? '1em' : "0" }}>
				<h3>{this.state.title}</h3>
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