import React from 'react'
import Deck from '../../components/Deck/Deck'
import './DeckList.css'

const DeckList = ({decks, deleteDeck}) => {
  return(
    <React.Fragment>
      <h1 id="decks-header">Your Decks</h1>
      <div className="breaker"></div>
      <div id="deck-list">
        {decks.map(deck => <Deck deleteDeck={deleteDeck} key={deck.id} deck={deck} />)}
      </div>
    </React.Fragment>
  )
}

export default DeckList
