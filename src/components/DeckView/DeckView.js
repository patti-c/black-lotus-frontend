import React from 'react'
import CardList from '../../containers/CardList/CardList'
import ManaCurve from '../ManaCurve/ManaCurve'
import Colors from '../../containers/Colors/Colors'
import './DeckView.css'

const DeckView = ({match, decks}) => {
  let currentDeck = decks.find(deck => deck.id == match.params.deckId)
  return (
    <div id="deck-view">
      <h1 id="deck-view-header">{currentDeck.name}</h1>
      <div className="breaker"/>
      <div id="data-container-id" className="ui grid data-container">
        <div className="eleven wide column">
          <h2 id="mana-curve-header">Mana Curve</h2>
          <ManaCurve deck={currentDeck} />
        </div>
        <div className="four wide column">
          <h2 id="colors-header">Mana Types</h2>
          <div id="colors-div">
            <Colors deck={currentDeck} />
          </div>
        </div>
      </div>
      <div className="breaker"/>
      <h2 id="cards-header">Cards</h2>
      <CardList cards={currentDeck.cards} display="modal" />
    </div>
  )
}


//Possibly add success rate div
  // <h2 id="success-rate-header">Success Rate</h2>
  // <div id="win-loss-div">
  //   <h1 id="wins">Wins: 0</h1>
  //   <h1 id="losses">Losses: 0</h1>
  // </div>

export default DeckView
