import React from 'react'
import {Link} from 'react-router-dom';
import nodecks from '../../assets/no-decks.jpg'
import './NoDecks.css'


const NoDecks = () => {
  return(
    <React.Fragment>
      <img id="no-decks-image" src={nodecks} alt='No decks were found'/>
      <div id="message">
        <h1>You do not have any decks</h1>
        <div id="second-line">
          <h2>Would you like to </h2>
          <Link className="inline-link" to={`/deckbuilder`}>create your first deck?</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NoDecks
