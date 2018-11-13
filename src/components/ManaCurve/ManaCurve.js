import React from 'react'
import {Bar} from 'react-chartjs-2';

// Regex for getting mana data
// string.match(/{.}/g)

class ManaCurve extends React.Component {

  manaData = () => {
    let cards = this.props.deck.cards
    for(let i=0; i < cards.length; i++) {
      let manacost = cards[i].manaCost.match(/{.}/g)
      console.log(manacost)
    }
  }

  render() {
    // this.manaData()
    return(
      <Bar id="bar-graph" data={{
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
            label: "Mana Curve",
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            data: [1,2,3]
        }]}}
      />
    )
  }
}

export default ManaCurve
