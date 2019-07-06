import React from 'react'
import { Card } from 'react-bootstrap'

const AboutUs = ()=> {
	return (
		<div className="about-us">
			<Card style={{ width: '40em', margin: '10em auto 0 auto' }}>
				<Card.Img variant="top" src="" />
			  <Card.Body>
			    <Card.Title><h1>About Us</h1></Card.Title>
			    <Card.Text style={{textAlign: 'left', margin: '1em'}}>
			    	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			    	<br/><br/>
			    	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			    </Card.Text>
			  </Card.Body>
			</Card>
		</div>
	)
}

export default AboutUs
