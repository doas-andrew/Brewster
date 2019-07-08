import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import BeerShelf from './BeerShelf'

class Home extends Component {

	state = {
		loggedIn: !!localStorage.getItem('brewster_token'),
		topBeers: []
	}

	componentDidMount() {
		fetch('http://localhost:3000/beers/top-beers')
		.then(res => res.json())
		.then(res => this.setState({ topBeers: res }))
	}

	getContent = ()=> {
		if(this.state.loggedIn)
			return <div style={{ margin: '6em auto', width: '50em' }}><BeerShelf title="Top 5 Craft Beers!" beers={this.state.topBeers} /></div>
		else
			return this.splash()
	}

	splash = ()=> (
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

	render() {
		return (
			<div id="home">
				{ this.getContent() }
			</div>
		)
	}
}

export default Home
