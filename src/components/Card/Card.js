import React from 'react'
import './Card.css'

const Card = ({card, handleClick}) => {
  return (
    <React.Fragment>
      {card.imageUrl ? <img onClick={() => handleClick(card)} src={card.imageUrl} alt={card.name} className="cardImage"/> : null}
    </React.Fragment>
  )
}

export default Card
