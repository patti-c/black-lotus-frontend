import React from 'react'
import {Link} from 'react-router-dom'
import './Deck.css'

const Deck = ({deck, deleteDeck}) => {
  return (
      <div className="deck-item">
        <Link to={`/decks/${deck.id}`}>
          <img className="deck-back" alt={deck.name} src={deck.cards[0].imageUrl} style={{height: '311px'}}/>
          <label className="label">{deck.name} </label>
        </Link>
        <i onClick={() => deleteDeck(deck.id)} className="fa fa-trash"></i>
        <Link to={{'pathname':`/deckbuilder`, state:{currentDeck: deck.cards, id: deck.id}}} >
          <i className="fa fa-edit"></i>
        </Link>
      </div>
  )
}

export default Deck
