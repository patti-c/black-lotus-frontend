import React, {Component} from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import CardList from '../CardList/CardList'
import MTG from '../../Adapter'
import './CardsPage.css'

const mtg = new MTG()

class CardsPage extends Component {

  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  submitSearch = (e, searchText) => {
    e.preventDefault()
    mtg.partialNameSearch(searchText)
      .then(this.setCardsState)
  }

  setCardsState = (data) => {

    let array = []

    for(let i = 0; i < data.length; i++) {
      let namesArray = array.map(el => el.name)
      if(!namesArray.includes(data[i].name)) {
        array.push(data[i])
      }
    }

    this.setState({
      cards: array
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="scrollable">
          <SearchForm submitSearch={this.submitSearch} />
          <CardList cards={this.state.cards} display="modal"/>
        </div>
      </React.Fragment>
    )
  }
}

export default CardsPage
