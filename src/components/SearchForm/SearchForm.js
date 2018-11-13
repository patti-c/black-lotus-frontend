import React from 'react'
import './SearchForm.css'

class SearchForm extends React.Component {

  constructor() {
    super()
    this.state = {
      searchText: ''
    }
  }

  updateSearch = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    return (
      <form
        id="card-search-form"
        className="ui form"
        onSubmit={(e) => this.props.submitSearch(e, this.state.searchText)}
      >
        <div className="field">
          <h2>Card Name</h2>
          <input type="text" name="card-name" placeholder="Card Name" onChange={this.updateSearch} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default SearchForm
