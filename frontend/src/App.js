import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      beerList: [],
      usersFavorites: [],
      showingSpecs: false,
      beerToShow: {}
    }
  }

  showDetails = (beerInfo) => {
	  this.setState({
      ...this.state,
      showSpecs: true, 
      beerToShow: botInfo
    })
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
        <BeerContainer showDetails={this.showDetails}beerList={this.state.beerList} addBeerToFavorites={props.addBeerToFavorites}/>
        {/* <SideBar/> */}
      </div>
    );
  }
}

export default App;
