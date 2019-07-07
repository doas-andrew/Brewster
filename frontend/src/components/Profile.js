import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';

import ReviewsContainer from './ReviewsContainer'
import BeerShelf from './BeerShelf'

import { Card, Button } from 'react-bootstrap'
import { FaCogs, FaUserPlus, FaEnvelope, FaBeer, FaEdit } from 'react-icons/fa';
import '../stylesheets/Profile.css'


class Profile extends Component {
	state = { 
		user: {},
		redirect: null
	}

	user_id = localStorage.getItem('brewster_id')
	loggedIn = !!localStorage.getItem('brewster_token')

	componentDidMount() {
		fetch('http://localhost:3000/users/profile/'+this.props.match.params.id)
		.then(res => res.json())
		.then(res => {
			if(res.error)
				this.setState({ redirect: <Redirect to="/404" /> })
			else
				this.setState({ user: res })
		})
	}

	renderProfileButtons = ()=> {
		if(this.user_id === this.state.user.id)
			return (
				<Fragment>
		  		<Button variant="secondary">Edit your Favorites &nbsp; <FaBeer/></Button>
		  		<Button variant="secondary">something to do with Reviews &nbsp; <FaEdit/></Button>
		  	</Fragment>
  		)
		if(this.user_id) {
			return (
				<Fragment>
		  		<Button variant="secondary">Send Friend Request &nbsp; <FaUserPlus/></Button>
		  		<Button variant="secondary">Message this User &nbsp; <FaEnvelope/></Button>
		  	</Fragment>
		  )
		}
	}

	render() {
		console.log(this.state.user)
		if(this.state.user.id === undefined)
			return null

		return (
			<div id="profile" className="page">
				{this.state.redirect}

		  	<div className="row" style={{ margin: '6em 1em 3em 0' }}>

			  	<div id="user-card" className="col-4">
			  		<div id="avatar-container" style={{ backgroundColor: 'red'}}>
				  		{ this.user_id === this.state.user.id ? <span onClick={console.log} id="edit-profile-btn"><FaCogs/></span> : null }
				  		<img src={require('../images/default_avatar.jpg')} alt="avatar" />
				  	</div>
				  	{this.renderProfileButtons()}
			  	</div>

			  	<div className="col" style={{ backgroundColor: '' }}>
			  		<h3>Reviews by {this.state.user.name}</h3>
			  		<ReviewsContainer reviews={this.state.user.reviews} />
					</div>
				</div>

				<h3>{this.state.user.username}'s Favorites</h3>
				<BeerShelf beers={this.state.user.favorite_beers} />
			</div>
		)
	}
}

export default Profile
