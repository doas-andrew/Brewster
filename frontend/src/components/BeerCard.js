import React from 'react';

class BeerCard extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="ui column">
                    <div
                        className="ui card"
                        key={props.beerInfo.id}
                    >
                        <div className="image">
                        <img alt="oh no!" src={this.props.beerinfo.image} />
                        </div>
                        <div className="content">
                        <div className="header">
                            {this.props.beerInfo.name}
                        </div>

                        <div className="meta text-wrap">
                            <small>{this.props.beerInfo.description}</small>
                        </div>
                            <button className="ui button fluid" onClick={() => this.props.addBeerToFavorites(this.props.beerInfo)}>Add to Favorites</button> 
                            <button className="ui button fluid" onClick={() => this.props.showDetails(this.props.beerInfo)}>Show Details</button>
                        </div>
                        <div className="extra content">
                        <span>
                            {props.beerInfo.type}
                        </span>

                        <span>
                            {props.beerInfo.brand}
                        </span>
                        <span>
                            {props.beerInfo.abv}
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