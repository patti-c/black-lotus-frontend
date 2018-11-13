import React, { Component } from 'react'
import './DecksPage.css'
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedIn'
import NoDecks from '../../components/NoDecks/NoDecks'
import DeckList from '../DeckList/DeckList'

class DecksPage extends Component {

  deleteDeck = (deckId) => {

    fetch(`http://localhost:3000/api/v1/decks`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : localStorage.token
      },
      body: JSON.stringify({id: deckId})
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.user) {
        this.props.updateUserInfo(json.user)
      }
    })
  }

  checkDeckExistence = () => {
    if(this.props.userInfo.decks.length > 0) {
      return(
        <React.Fragment>
          <DeckList deleteDeck={this.deleteDeck} decks={this.props.userInfo.decks}/>
       </React.Fragment>
      )
    } else {
      return (
        <NoDecks/>
      )
    }
  }

  checkLoggedIn = () => {
    if(this.props.userInfo) {
      return(
        <React.Fragment>
          {this.checkDeckExistence()}
        </React.Fragment>
      )
    } else {
      return(<NotLoggedIn/>)
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.checkLoggedIn()}
      </React.Fragment>

    )
  }
}

export default DecksPage
