import React from 'react'
import SmallCardView from '../../components/SmallCardView/SmallCardView'

const SmallCardList = ({cards, handleClick}) => {
  return(
    <React.Fragment>
      {cards.map(function(cardData) {
        if(cardData) {
          return (
            <SmallCardView handleClick={handleClick} key={cardData.id} card={cardData}/>
          )
        }
      })}
    </React.Fragment>
  )
}

export default SmallCardList
