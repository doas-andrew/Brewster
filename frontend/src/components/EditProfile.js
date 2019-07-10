import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap'
import { FaChevronCircleLeft } from 'react-icons/fa'


const user_id = localStorage.getItem('brewster_id')

class EditProfile extends Component {

	state = {
		errors: [],
		redirect: null
	}

	handleUpdate = e => {
		e.preventDefault()
		let form = e.target

		if(form.password.value && form.password.value !== form.confirm.value)
			this.setState({ errors: 'New passwords did not match.' })

		else {
			let update = { user: {} }
			if(form.name.value) update.user.name = form.name.value
			if(form.password.value) update.user.password = form.password.value
			if(form.avatar.files[0]) update.user.avatar = URL.createObjectURL(form.avatar.files[0])

			// console.log('update = ', update)

			fetch('http://localhost:3000/users/'+user_id, {
				method: 'PATCH',
				headers: { Accept: 'application/json', 'Content-Type':'application/json' },
				body: JSON.stringify(update)
			})
			.then(res => res.json())
			.then(res => {
				if(res.errors)
					this.setState({ errors: res.errors })
				else
					this.setState({ redirect: <Redirect to={'/profile/'+user_id} /> })
			})
		}
	}

	showErrors = ()=> this.state.errors.map((error, index) => <Card.Text key={index} className="error">{error}</Card.Text>)

	render() {
		return (
			<div id="update">
				{this.state.redirect}

				<Card className="brew-card">
				  <Card.Body>
				  	<Card.Img variant="top" src={require('../images/brewster_banner.png')}></Card.Img>
				  	{this.state.errors.length ? this.showErrors() : null}
				  	<br/>
						<form onSubmit={this.handleUpdate}>
							<div className="row">
								<div className="col-6">
									<input type="text" name="name" placeholder=" Update name" /><br/><br/>
									<input type="file" name="avatar" style={{ marginLeft: '2em' }} />
								</div>
								<div className="col-1"></div>
								<div className="col-3">
									<input type="password" name="password" placeholder=" New password"    /><br/><br/>
									<input type="password" name="confirm"      placeholder=" Confirm password"/><br/><br/>
								</div>
							</div>
							<br/>
							<Button type="submit" variant="secondary">Update</Button>
							<br/>
						</form>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default EditProfile;
