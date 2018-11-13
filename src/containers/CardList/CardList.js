import React from 'react'
import './CardList.css'
import Card from '../../components/Card/Card'
import CardModal from '../../components/CardModal/CardModal'

class CardList extends React.Component {

  modalOrStandard() {
    if(this.props.display === "modal") {
      return(
        <React.Fragment>
          {this.props.cards.map(cardData =>
            <CardModal
              key={cardData.id}
              handleClick={this.props.handleClick}
              card={cardData}
            />)}
        </React.Fragment>
      )
    } else {
      return(
        <React.Fragment>
          {this.props.cards.map(cardData =>
            <Card
              key={cardData.id}
              handleClick={this.props.handleClick}
              card={cardData}
            />)}
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div id="card-list-container">
        {this.modalOrStandard()}
      </div>
    )
  }
}

export default CardList
