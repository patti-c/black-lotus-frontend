import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import CardList from '../CardList/CardList'
import SmallCardList from '../SmallCardList/SmallCardList'
import DeckBuilderWelcome from '../../components/DeckBuilderWelcome/DeckBuilderWelcome'
import DeckForm from '../../components/DeckForm/DeckForm'
import MTG from '../../Adapter'
import {Redirect} from 'react-router-dom'
import './DeckBuilder.css'
const mtg = new MTG()

class DeckBuilder extends React.Component {

  constructor() {
    super()
    this.state = {
      searchedCards: [],
      currentDeck: [],
      complete: null,
      id: null
    }
  }

  componentDidMount() {
    if(window.history.state.state) {
      this.setState({
        currentDeck: window.history.state.state.currentDeck,
        id: window.history.state.state.id
      })
    }
  }

  submitSearch = (e, searchText) => {
    e.preventDefault()
    mtg.partialNameSearch(searchText)
      .then(this.setSearchedCards)
  }

  setSearchedCards = (data) => {
    let array = []
    for(let i = 0; i < data.length; i++) {
      let namesArray = array.map(el => el.name)
      if(!namesArray.includes(data[i].name)) {
        array.push(data[i])
      }
    }
    this.setState({
      searchedCards: array
    })
  }

  addToDeck = (card) => {
    if(this.state.currentDeck.length < 60) {
      this.setState({
        currentDeck: [...this.state.currentDeck, card  ]
      })
    }
  }

  submitDeck = (e, data) => {
    e.preventDefault()
    data.cards = this.state.currentDeck.map(function(card) {
      if(card) {
        return {
        name: card.name,
        artist: card.artist,
        flavor: card.flavor,
        imageUrl: card.imageUrl,
        manaCost: card.manaCost,
        originalType: card.originalType,
        setName: card.setName,
        text: card.text,
        cmc: card.cmc}
      }
    })
    if(this.state.id === null) {
      this.attemptDeckCreation(data)
    } else {
      data.id = this.state.id
      this.attempdDeckEdit(data)
    }
  }

  attempdDeckEdit(data) {
    fetch(`http://localhost:3000/api/v1/editdeck`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : localStorage.token
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      if(json.user) {
        this.props.updateUserInfo(json.user)
        this.setState({
          complete: true
        })
      }
    })
  }

  attemptDeckCreation(data) {
    fetch(`http://localhost:3000/api/v1/newdeck`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : localStorage.token
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      if(json.user) {
        this.props.updateUserInfo(json.user)
        this.setState({
          complete: true
        })
      }
    })
  }

  removeCardFromDeck = (cardToDelete) => {
    let deckCopy = [...this.state.currentDeck]
    let index = deckCopy.findIndex(card => card === cardToDelete)
    deckCopy[index] = null;
    this.setState({
      currentDeck: deckCopy
    })
  }

  render() {
    return(
      <React.Fragment>
        <DeckBuilderWelcome/>
        <div id="deck-list-container" className="ui grid deckbuilder-container">
          <div className="nine wide column">
            <div className="scrollable">
              <SearchForm submitSearch={this.submitSearch} />
              <CardList handleClick={this.addToDeck} cards={this.state.searchedCards} />
            </div>
          </div>
          <div className="seven wide column">
            <div className="scrollable">
              <div id="deck-list-form">
                <h2>Your Deck</h2>
                <p>{this.state.currentDeck.length} / 60 cards</p>
                <DeckForm cards={this.state.currentDeck} submit={this.submitDeck} />
              </div>
              <h2 id="deck-list-heading">Deck List</h2>
              <SmallCardList handleClick={this.removeCardFromDeck} cards={this.state.currentDeck} />
            </div>
          </div>
        </div>
        {this.state.complete ? <Redirect to="/decks" /> : null}
      </React.Fragment>
    )
  }
}

export default DeckBuilder
