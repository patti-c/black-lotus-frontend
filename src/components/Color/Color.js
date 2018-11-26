import React from 'react'

class Color extends React.Component {
  getColorImage(color) {
    return require (`../../assets/color-icons/mtg-${color}.png`)
  }

  render() {
    return(
      <img className="color-image" src={this.getColorImage(this.props.color.toLowerCase())}/>
    )
  }
}

export default Color
