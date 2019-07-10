import React, { Component } from 'react'
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

class CardFront extends Component {

    generateRatingElement = () => {
    return this.props.rating === null ? <h4>No Rating Found</h4> : <img className='review-pics' src={imgMapper[this.props.review.rating]} alt="" />
  }

  render() {
    return (
      <div className="card-front">
        <h3 className="title">{this.props.review.title}</h3>
        <span className='rspan' />
        {this.generateRatingElement()}
        <span className='rspan' />
        <h5 className="user">{this.props.rUser}</h5>
      </div>
    )
  }
}

export default CardFront