import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './stylesheets/App.css';

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
		if(this.state.loggedIn) {
			window.history.pushState({url: "/"},"", "/")
			localStorage.removeItem('brewster_token')
			localStorage.removeItem('brewster_id')
		}
		this.setState({ loggedIn: !this.state.loggedIn })
	}

	handleSearch = e => {
		e.preventDefault()
		window.history.pushState({url: "/search/"+e.target.search.value},"", "/search/"+e.target.search.value)
		this.setState({ search: e.target.search.value })
	}

	render() {
	  return (
    	<Router>
	    	<div className="App">
	      	<RenderNavbar loggedIn={this.state.loggedIn} changeLoggedIn={this.changeLoggedIn} handleSearch={this.handleSearch} />

    			<Switch>
		        <Route exact path="/" component={Home} />
		        <Route exact path="/profile/:id" component={Profile}  />
		        <Route exact path="/search/:search" component={SearchResults}  />
		        <Route exact path="/about-us" component={AboutUs} />
	          <Route exact path="/login" render={()=> this.state.loggedIn ? <Redirect to='/'/> : <Login changeLoggedIn={this.changeLoggedIn} />}  />
	          <Route exact path="/sign-up" render={()=> this.state.loggedIn ? <Redirect to='/'/> : <SignUp changeLoggedIn={this.changeLoggedIn} />} />
	          <Route component={NotFound} />
	      	</Switch>
      	</div>
			</Router>
	  );
	}
}

export default App;
