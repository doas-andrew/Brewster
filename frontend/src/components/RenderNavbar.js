import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaAngleLeft, FaBeer, FaAngleRight, FaSearch } from 'react-icons/fa';


const user_id = ()=> localStorage.getItem('brewster_id')

class RenderNavbar extends Component {

  state = { redirect: null }

  handleLogout = ()=> {
    localStorage.removeItem('brewster_token')
    localStorage.removeItem('brewster_id')
    this.setState({ redirect: <Redirect to='/login' /> })
    this.props.logUser(false)
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{ fontSize: '1.2em' }}>
        {this.state.redirect}

        <LinkContainer to='/'><h3 id="nav-logo"><FaAngleLeft/>Brewster <FaBeer/><FaAngleRight/></h3></LinkContainer>
        &nbsp; &nbsp; &nbsp;
        <Nav className="mr-auto">
          <LinkContainer to='/about-us'><Nav.Link>About Us</Nav.Link></LinkContainer>
          &nbsp; &nbsp; &nbsp;
          {
            this.props.loggedIn ?
              <Fragment>
                <LinkContainer to={'/profile/'+user_id()}><Nav.Link>Profile</Nav.Link></LinkContainer>
                &nbsp; &nbsp; &nbsp;
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              </Fragment>
              :
              <Fragment>
                <LinkContainer to='/login'><Nav.Link>Login</Nav.Link></LinkContainer>
                &nbsp; &nbsp; &nbsp;
                <LinkContainer to='/sign-up'><Nav.Link>Sign Up</Nav.Link></LinkContainer>
              </Fragment>
          }
        </Nav>
      </Navbar>
    )
  }
}

export default RenderNavbar
