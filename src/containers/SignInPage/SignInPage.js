import React, { Component } from 'react'
import './SignInPage.css'
import UserForm from '../../components/UserForm/UserForm'
import blacklotus from '../../assets/black-lotus-very-large.jpg'

class SignInPage extends Component {

  handleLoginSubmit = (e, data) => {
    e.preventDefault()
    console.log(data)
    this.attemptSignIn("login", data)
  }

  createUser = (e, data) => {
    e.preventDefault()
    this.attemptSignIn("create", data)
  }

  attemptSignIn(url, data) {
    fetch(`http://localhost:3000/api/v1/${url}`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      if(json.jwt) {
        localStorage.setItem('token', json.jwt)
        this.props.updateUserInfo(json.user_info)
      }
    })
  }

  render() {
    return(
      <React.Fragment>
        <div className="ui grid signin-container">
          <div id="sign-in-area" className="eight wide column">
            <h1 id="signin-logo" className="center">Sign in</h1>
            <UserForm submit={this.handleLoginSubmit}/>
            <h1 id="createuser-logo" className="center">Create New User</h1>
            <UserForm submit={this.createUser} />
          </div>
          <div id="black-lotus-image-container" className="eight wide column">
            <img alt="black-lotus-large" id="black-lotus-large" src={blacklotus}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignInPage
