import React from 'react';

class BeerCard extends React.Component {
    
    render() { 
        return ( 
            <div>
                <div className="ui column">
                    <div
                        className="ui card"
                        key={this.props.beerInfo.id}
                    >
                        <div className="image">
                        {/* <img alt="oh no!" src={this.props.beerinfo.image} /> */}
                        </div>
                        <div className="content">
                        <div className="header">
                            Name: {this.props.beerInfo.name}
                        </div>

                        <div className="meta text-wrap">
                            <small>{this.props.beerInfo.description}</small>
                        </div>
                            <button className="ui button fluid" onClick={() => this.props.addBeerToFavorites(this.props.beerInfo)}>Add to Favorites</button> 
                            <button className="ui button fluid" onClick={() => this.props.showDetails(this.props.beerInfo)}>Show Details</button>
                        </div>
                        <div className="extra content">
                        <span>
                            Type: {this.props.beerInfo.type}
                        </span>
                        <br/>
                        <span>
                            {this.props.beerInfo.brand}
                        </span>
                        <span>
                            ABV: {this.props.beerInfo.abv}
                        </span>
                        </div>
                    </div>
                    </div>
                );
            </div>
         );
    }
}
 
export default BeerCard;