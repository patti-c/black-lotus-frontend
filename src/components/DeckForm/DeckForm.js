import React from 'react'

class DeckForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null
    }

  }

  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form
        id="deck-form"
        className="ui form"
        onSubmit={(e) => this.props.submit(e, this.state)}
      >
        <div className="field">
          <label>Deck Name</label>
          <input type="text" name="name" placeholder="Deck Name" onChange={this.changeState} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default DeckForm
