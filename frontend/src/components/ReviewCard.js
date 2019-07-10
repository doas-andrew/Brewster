import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

 let rUser = {name: 'Default Name'}

class ReviewCard extends Component {

  fetchUser = () => {
    fetch('http://localhost:3000/users/' + this.props.review.user_id)
    .then(res => res.json())
    .then(res => rUser = res)
  }

  render(){
    return (
      <div className='review-card'>
        <CardFront rUser={rUser} review={this.props.review} />
        <CardBack review={this.props.review} />
      </div>
    )
  }
}

export default ReviewCard