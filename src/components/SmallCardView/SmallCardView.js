import React from 'react'
import './SmallCardView.css'

const cardColor = (card) => {
  if(card.colors) {
    return card.colors[0]
  } else {
    return 'black'
  }
}

const SmallCardView = ({card, handleClick}) => {
  return(
    <React.Fragment>
      {card ? <li onClick={() => handleClick(card)} style={{color: cardColor(card)}}>{card.name}</li> : null}
    </React.Fragment>
  )
}

export default SmallCardView
