import React from 'react'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Home.js'
import Login from './Login.js'
import SignUp from './SignUp.js'
import AboutUs from './AboutUs.js'

const RenderNavbar = ()=> {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" style={{ fontSize: '1.2em' }}>
        <LinkContainer to='/'><Navbar.Brand>Brewster</Navbar.Brand></LinkContainer>

        <Nav className="mr-auto">
          {
            localStorage.getItem('token') ?
              <Nav.Link onClick={console.log}>Logout</Nav.Link>
              :
              <LinkContainer to='/login'><Nav.Link>Login</Nav.Link></LinkContainer>
          }
          <LinkContainer to='/sign-up'><Nav.Link>Sign Up</Nav.Link></LinkContainer>
          <LinkContainer to='/about-us'><Nav.Link>About Us</Nav.Link></LinkContainer>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder=" Find a beer" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/about-us" component={AboutUs} />
    </Router>
  )
}

export default RenderNavbar
