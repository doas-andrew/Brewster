import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom';

import ReviewsContainer from './ReviewsContainer'
import BeerShelf from './BeerShelf'

import { Card, Button } from 'react-bootstrap'
import { FaCogs, FaUserPlus, FaEnvelope, FaBeer, FaEdit } from 'react-icons/fa';
import '../stylesheets/Profile.css'


const default_avatar = require('../images/default_avatar.jpg')

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
		  		<Link to='/' ><Button variant="secondary">Send Friend Request &nbsp; <FaUserPlus/></Button></Link>
		  		<Link to='/' ><Button variant="secondary">Message this User &nbsp; <FaEnvelope/></Button></Link>
		  	</Fragment>
		  )
		}
	}

	render() {
		if(this.state.user.id === undefined)
			return null

		return (
			<div id="profile" className="page">
				{this.state.redirect}

		  	<div className="row">

			  	<div id="user-card" className="col-4">
			  		<div id="avatar-container">
				  		{ this.user_id === this.state.user.id ? <FaCogs id="edit-profile-btn" onClick={()=> this.setState({ redirect: <Redirect to='/edit-profile' /> }) } /> : null }
				  		<img src={this.state.user.avatar ? this.state.user.avatar : default_avatar } alt="avatar" />
				  	</div>
				  	{this.renderProfileButtons()}
			  	</div>

			  	<div className="col" style={{ backgroundColor: '' }}>
			  		<h3>Reviews by {this.state.user.name}</h3>
			  		<ReviewsContainer reviews={this.state.user.reviews} />
					</div>
				</div>

				<BeerShelf beers={this.state.user.favorite_beers} title={this.state.user.username+"'s Favorites"} />
			</div>
		)
	}
}

export default Profile
