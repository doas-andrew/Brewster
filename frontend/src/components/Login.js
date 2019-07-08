import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class Login extends Component {

	state = { errors: [] }

	handleLogin = e => {
		e.preventDefault()

		if(e.target.login_name.value && e.target.password.value) {
			fetch('http://localhost:3000/login',{
		    method: 'POST',
		    headers: { Accept: 'application/json', 'Content-Type':'application/json' },
		    body: JSON.stringify({
					login_name: e.target.login_name.value.toLowerCase(),
					password: e.target.password.value
		    })
		  })
		  .then(res => res.json())
		  .then(res => {
		  	if(res.token) {
		  		localStorage.setItem('brewster_token', res.token)
		  		localStorage.setItem('brewster_id', res.user_id)
          window.history.pushState({url: "/"},"", "/")
          this.forceUpdate()
		  	}
		  	else if(res.errors)
		  		this.setState({ errors: res.errors })
		  })
			e.target.password.value = ''
		}
	}

	showErrors = ()=> this.state.errors.map((error, index) => <Card.Text key={index} className="error">{error}</Card.Text>)

	render() {
		return (
			<div id="login">
				<Card className="login-signup">
				  <Card.Body>
				  	<Card.Img variant="top" src={require('../images/brewster_banner.png')}></Card.Img>
				  	{this.state.errors.length ? this.showErrors() : null}
				  	<br/>
						<form onSubmit={this.handleLogin}>
							<input type="text" name="login_name" placeholder=" Username" />
							<br/><br/>
							<input type="password" name="password" placeholder=" Password" />
							<br/><br/>
							<Button type="submit" variant="secondary">Login</Button>
							<br/>
						</form>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}
export default Login
