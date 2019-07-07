import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const renderHomeButtons = ()=> (
	<Card.Body>
	  <div className="row" style={{ marginBottom: '1em' }}>
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
			<div className="row">
				<Card style={{ width: '30em', margin: '10em auto 0 auto' }}>
	  			<Card.Img variant="top" style={{ margin: 'auto', width: '20em', height: '20em' }} src={require('../brewster.png')} />
				  { props.loggedIn ? null : renderHomeButtons() }
				</Card>
			</div>
		</div>
	)
}

export default Home
