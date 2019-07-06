import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class SignUp extends Component {

	state = { errors: [] }

	handleSignUp = e => {
		e.preventDefault()

		if(e.target.password.value === e.target.confirm.value) {

			let newUser = {
				user: {
					name: e.target.name.value,
					username: e.target.username.value,
					password: e.target.password.value
				}
			}

			fetch('http://localhost:3000/users',{
		    method: 'POST',
		    headers: { Accept: 'application/json', 'Content-Type':'application/json' },
		    body: JSON.stringify( newUser )
		  })
		  .then(res => res.json())
		  .then(res => {

		  	console.log(res)

		  	if(res.token) {
		  		// localStorage.setItem('token', res.token)
          this.props.history.push("/profile");
		  	}
		  	else if(res.errors)
		  		this.setState({ errors: res.errors })
		  })
		}
		else
			this.setState({ errors: ["Passwords did not match."] })

		e.target.password.value = ''
		e.target.confirm.value = ''
	}

	showErrors = ()=> this.state.errors.map((error, index) => <Card.Text key={index} className="error">{error}</Card.Text>)


	render() {
		return (
			<div id="sign-up">
				<Card className="login-signup">
				  <Card.Body>
				  	<Card.Img variant="top" src={require('../brewster_banner.png')}></Card.Img>
				  	{this.state.errors.length ? this.showErrors() : null}
				  	<br/>
						<form onSubmit={this.handleSignUp}>
							<div className="row">
								<span className="col-1"></span>
								<input className="col" type="text" name="name" placeholder=" Name" />
								<span className="col-1"></span>
								<input className="col" type="text" name="username" placeholder=" Username" />
								<span className="col-1"></span>
							</div>
							<br/>
							<div className="row">
								<span className="col-1"></span>
								<input className="col"  type="password" name="password" placeholder=" Enter Password" />
								<span className="col-1"></span>
								<input className="col"  type="password" name="confirm" placeholder=" Confirm Password" />
								<span className="col-1"></span>
							</div>
							<br/>
							<Button type="submit" variant="secondary">Sign Up</Button>
							<br/>
						</form>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default SignUp
