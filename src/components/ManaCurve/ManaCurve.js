import React from 'react'
import { Bar } from 'react-chartjs-2';
class ManaCurve extends React.Component {

  cmcArray = () => {
    let cards = this.props.deck.cards
    let array = [0, 0, 0, 0, 0, 0, 0, 0]
    cards.forEach(function(card) {
      if(!array[card.cmc]) {
        array[card.cmc] = 1
      } else {
        array[card.cmc] += 1
      }
    })
    console.log(array)
    return array
  }

  render() {
    return(
      <Bar id="bar-graph" data={{
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
            label: "Mana Curve",
            backgroundColor: 'white',
            borderColor: 'white',
            data: this.cmcArray()
        }]}
      } options={{
        legend: {display: false},
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "# of cards",
              fontStyle: 'bold',
              fontColor: 'black'
            },
            ticks: {
              fontColor: "black",
              stepSize: 1
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Mana Cost",
              fontStyle: 'bold',
              fontColor: "black"
            },
            ticks: {
              fontColor: "black"
            }
          }]
        }
      }}
      />
    )
  }
}

export default ManaCurve
