import React, { Component } from 'react'



class CardBack extends Component {

  render(){
    return (
      <div className='card-back'>
      <strong>{this.props.review.content}</strong>
      </div>
    )
  }

}

export default CardBack