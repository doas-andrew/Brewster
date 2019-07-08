import React from 'react'
import { Card } from 'react-bootstrap'

const NotFound = ()=> {
	return (
		<div id="404">
			<Card style={{margin: '5em auto 0 auto', width: '30em'}}>
			  <Card.Body>
			  	<h1>404 - Page not found</h1>
			  </Card.Body>
			</Card>
		</div>
	)
}

export default NotFound
