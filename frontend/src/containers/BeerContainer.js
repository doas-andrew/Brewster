import React from 'react';
import BeerCard from "./components/BeerCard"

class BeerContainer extends React.Component {
    render(){
        return(
            <div id="BeerContainer" className="ui four column grid">
                <div className="row">
                    {this.props.beerlist.map((beer, idx) => <BeerCard key={idx} beerInfo={beer} addBeerToFavorites={this.props.addBeerToFavorites}/>)}
                </div>
            </div>
        )
    }
}
export default BeerContainer