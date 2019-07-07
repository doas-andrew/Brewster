import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const renderHomeButtons = ()=> (
	<Card.Body>
		<div className="row">
	  	<span className="col"></span>
	    <LinkContainer className="col-4" to='/login'><Button variant="secondary">Login</Button></LinkContainer>
	    <span className="col"></span>
	    <LinkContainer className="col-4" to='/sign-up'><Button variant="secondary">Sign Up</Button></LinkContainer>
	    <span className="col"></span>
    </div>
	</Card.Body>
)

const Home = (props)=> {
	return (
		<div id="home">
			<Card style={{ width: '30em', margin: '10em auto 0 auto' }}>
  			<Card.Img variant="top" style={{ margin: 'auto', width: '20em', height: '20em' }} src={require('../images/brewster.png')} />
			  { localStorage.getItem('brewster_token') ? null : renderHomeButtons() }
			</Card>
		</div>
	)
}

export default Home
