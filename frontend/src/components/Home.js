import React, { Component, Fragment } from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import BeerShelf from './BeerShelf'

class Home extends Component {

	state = {
		loggedIn: !!localStorage.getItem('brewster_token'),
		showAll: false,
		allBeers: [],
		filter: 'show_all',
		sort: 'description'
	}

	componentDidMount() {
		fetch('http://localhost:3000/beers')
		.then(res => res.json())
		.then(res => this.setState({ allBeers: res , fBeers: res}))
	}

	splash = () => (
		<Card style={{ width: '30em', margin: '10em auto 0 auto' }}>
			<Card.Img variant="top" style={{ margin: 'auto', width: '20em', height: '20em' }} src={require('../images/brewster.png')} />
		  	<Card.Body>
					<div className="row">
				  	<span className="col"></span>
				    <LinkContainer className="col-4" to='/login'><Button variant="secondary">Login</Button></LinkContainer>
				    <span className="col"></span>
				    <LinkContainer className="col-4" to='/sign-up'><Button variant="secondary">Sign Up</Button></LinkContainer>
				    <span className="col"></span>
			    </div>
				</Card.Body>
		</Card>
	)

	getDisplayBeers = ()=> {
		let beers = this.state.allBeers
		beers = beers.sort((a,b) => this.compare(a,b, this.state.sort))

		if(this.state.filter !== 'show_all')
			beers = beers.filter(beer => beer.description.toLowerCase().includes(this.state.filter) )

		return beers
	}

	compare = (a,b, attr)=> {
		if(a[attr] < b[attr]) return -1
		if(a[attr] > b[attr]) return  1
		return 0
	}

	beerSearch = ()=> {
		return (
			<Fragment>
				<div className="sort-filter" >
					Filter by<br/>
					<select value={this.state.filter} onChange={ e => this.setState({ filter: e.target.value }) }>
						<option value='show_all'>Show All</option>
						<option value="ale">IPA</option>
						<option value="pilsner">Pilsner</option>
						<option value="porter">Porter</option>
						<option value="stout">Stout</option>
						<option value="lager">Lager</option>
					</select>

					<br/><br/>

					Sort by<br/>
					<select value={this.state.sort} onChange={ e => this.setState({ sort: e.target.value }) }>
						<option value="description">Options</option>
						<option value="name">Name</option>
						<option value="abv">ABV</option>
						<option value="ibu">IBU</option>
						<option value="ph">Ph</option>
					</select>
				</div>

				<div id="home-shelf">
					<BeerShelf beers={this.getDisplayBeers()}  title={"Craft Beers"} />
				</div>
			</Fragment>
		)
	}

	render() {
		return (
			<div id="home">
				{ this.state.loggedIn ? this.beerSearch() : this.splash() }
			</div>
		)
	}
}

export default Home
