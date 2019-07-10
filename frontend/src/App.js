import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './stylesheets/App.css';

import RenderNavbar from './components/RenderNavbar';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AboutUs from './components/AboutUs'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import SearchResults from './components/SearchResults'
import NotFound from './components/NotFound'


const loggedIn = !!localStorage.getItem('brewster_token')

class App extends Component {

	render() {
	  return (
	  	<BrowserRouter>
	    	<div className="App">
	    		<RenderNavbar />

	  			<Switch>
		        <Route exact path="/" component={Home} />
		        <Route exact path="/profile/:id" component={Profile} />
		        <Route exact path="/edit-profile" render={()=> !loggedIn ? <Redirect to='/'/> : <EditProfile/>} />
		        <Route exact path="/search/:search" component={SearchResults}  />
		        <Route exact path="/about-us" component={AboutUs} />
	          <Route exact path="/login" render={()=> loggedIn ? <Redirect to='/'/> : <Login/>}  />
	          <Route exact path="/sign-up" render={()=> loggedIn ? <Redirect to='/'/> : <SignUp/>} />
	          <Route component={NotFound} />
	      	</Switch>
	    	</div>
			</BrowserRouter>
	  )
	}
}

export default App;
