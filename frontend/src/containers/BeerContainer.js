import React from 'react';
import BeerCard from "../components/BeerCard"

class BeerContainer extends React.Component {
    render(){
        return(
            <div id="BeerContainer" className="container">
                <div className="row">
                    {this.props.beerList.map((beer, idx) => <BeerCard key={idx} beerInfo={beer} addBeerToFavorites={this.props.addBeerToFavorites} showDetails={this.props.showDetails}/>)}
                </div>
            </div>
        )
    }
}
export default BeerContainer