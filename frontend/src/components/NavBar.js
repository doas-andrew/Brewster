import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
                </a>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;