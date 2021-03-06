import React, {Component} from 'react'

class CreateUserForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: null,
      password: null
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
        id="create-user-form"
        className="ui form"
        onSubmit={(e) => this.props.submit(e, this.state)}
      >
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Your username" onChange={this.changeState} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Your password" onChange={this.changeState} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default CreateUserForm
