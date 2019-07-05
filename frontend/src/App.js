import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      beerList: [],
      usersFavorites: []
    }
  }

  componentDidMount(){
    fetch()
    .then(res => res.json())
    .then(data => this.setState({beerList: data
    }))
  }

  addBeerToFavorites = (beerInfo) => {
    this.setState({
      ...this.state,
      beerList: [...this.state.beerList, beerInfo]
    })
  }



  render(){
    return (
      <div className="app">
        {/* <NavBar/> */}
        <BeerContainer beerList={this.state.beerList} addBeerToFavorites={props.addBeerToFavorites}/>
        {/* <SideBar/> */}
      </div>
    );
  }
}

export default App;
