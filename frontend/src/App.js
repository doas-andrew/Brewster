import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import RenderNavbar from './components/RenderNavbar';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AboutUs from './components/AboutUs'
import Profile from './components/Profile'
import SearchResults from './components/SearchResults'
import NotFound from './components/NotFound'

class App extends Component {
	state = {
		loggedIn: !!localStorage.getItem('brewster_token'),
		search: ''
	}

	changeLoggedIn = ()=> {
		if(this.state.loggedIn)
			localStorage.removeItem('brewster_token')

		this.setState({ loggedIn: !this.state.loggedIn })
	}

	handleSearch = e => {
		e.preventDefault()
		window.history.pushState({url: "/search"},"", "/search")
		this.setState({ search: e.target.search.value })
	}

	render() {
		console.log(this.state)
	  return (
	    <div className="App">
	    	<Router>
	      	<RenderNavbar loggedIn={this.state.loggedIn} changeLoggedIn={this.changeLoggedIn} handleSearch={this.handleSearch} />

    			<Switch>
		        <Route path="/profile" render={()=> <Profile loggedIn={this.state.loggedIn} />} />
		        <Route exact path="/search" render={()=> <SearchResults search={this.state.search} />} />
		        <Route exact path="/" render={()=> <Home loggedIn={this.state.loggedIn} />} />
		        <Route exact path="/about-us" component={AboutUs} />
	          <Route exact path="/login" render={()=> this.state.loggedIn ? <Redirect to='/'/> : <Login changeLoggedIn={this.changeLoggedIn} />}  />
	          <Route exact path="/sign-up" render={()=> this.state.loggedIn ? <Redirect to='/'/> : <SignUp changeLoggedIn={this.changeLoggedIn} />} />
	          <Route component={NotFound} />
	      	</Switch>
  			</Router>
	    </div>
	  );
	}
}

export default App;
