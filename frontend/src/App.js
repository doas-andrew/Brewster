import React from 'react';
import './App.css';
import BeerContainer from './containers/BeerContainer'


class App extends React.Component {
  

  constructor(){
    super()
    this.state = {
      beerList: [
        {
        name:"beerboi",
        type:"IPA",
        abv: "20%"
      }
    ],
      usersFavorites: [],
      showingSpecs: false,
      beerToShow: {},
      page: 1
    }
  }

  showDetails = (beerInfo) => {
    console.log(beerInfo)
	  this.setState({
      ...this.state,
      showSpecs: true, 
      beerToShow: beerInfo
    })
  }

  // componentDidMount(){
  //   fetch(`http://api.brewerydb.com/v2/beers/?key=ff38e26417e74fd8aa59902c71307936/?_limit=20&_page=${this.state.page}`)
  //   .then(console.log)
  //   .then(res => res.json())
  //   .then(data => this.setState({beerList: data
  //   }))
  // }

  addBeerToFavorites = (beerInfo) => {
    console.log(beerInfo)
    this.setState({
      ...this.state,
      usersFavorites: [...this.state.beerList, beerInfo]
    })
  }



  render(){
    return (
      <div className="app">
        {/* <NavBar/> */}
        <BeerContainer showDetails={this.showDetails}beerList={this.state.beerList} addBeerToFavorites={this.addBeerToFavorites}/>
        {/* <SideBar/> */}
      </div>
    );
  }
}

export default App;
