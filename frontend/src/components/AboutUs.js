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
					Brewster is an application for finding new beers, seeing each beer's detailed information, and keeping track of all your favorites! Users can leave reviews on each beer so that others can make good decisions about which beers to try and share opinions! We have designed this application with React, a Javascript framework, a Ruby on Rails backend, and finally HTML and CSS.
			    	<br/><br/>
			    	Designed by: Andrew Allen, Romy Maghsoudi, and Will Jones. 
			    </Card.Text>
			  </Card.Body>
			</Card>
		</div>
	)
}

export default AboutUs
