import React from 'react'
import './DeckBuilderWelcome.css'

const DeckBuilderWelcome = () => {
  return (
    <React.Fragment>
      <div id="deck-builder-welcome" className="centered">
        <h1>Welcome to the Deck Builder</h1>
        <h2>Start by searching for cards to add to your deck</h2>
        <div className="breaker"></div>
      </div>
    </React.Fragment>
  )
}

export default DeckBuilderWelcome
