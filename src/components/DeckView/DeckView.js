import React from 'react'
import CardList from '../../containers/CardList/CardList'
import ManaCurve from '../ManaCurve/ManaCurve'
import './DeckView.css'

const DeckView = ({match, decks}) => {
  let currentDeck = decks.find(deck => deck.id == match.params.deckId)
  return (
    <div id="deck-view">
      <h1 id="deck-view-header">{currentDeck.name}</h1>
      <div className="breaker"/>
      <h2 id="mana-curve-header">Mana Curve</h2>
      <ManaCurve deck={currentDeck} />
      <div className="breaker"/>
      <h2 id="cards-header">Cards</h2>
      <CardList cards={currentDeck.cards} display="modal" />
    </div>
  )
}

// const DeckView = ({match, decks}) => {
//   let currentDeck = decks.find(deck => deck.id == match.params.deckId)
//   return (
//     <div id="deck-view">
//       <h1 id="deck-view-header">{currentDeck.name}</h1>
//       <div className="breaker"/>
//       <CardList cards={currentDeck.cards} display="modal" />
//     </div>
//   )
// }
//
export default DeckView
