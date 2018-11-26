import React from 'react'
import Color from '../../components/Color/Color'

class Colors extends React.Component {

  findColors() {
    let array = this.props.deck.cards.map(card => card.color)
    let set = new Set(array)
    let uniqueColors = Array.from(set)
    return uniqueColors
  }

  removeUndefined(color) {
    if(color) {
      return <Color color={color} />
    }
  }

  render() {
    return(
      <div>
        {this.findColors().map(this.removeUndefined)}
      </div>
    )
  }
}

export default Colors
