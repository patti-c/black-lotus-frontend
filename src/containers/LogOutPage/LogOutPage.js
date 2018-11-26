import React from 'react'
import './LogOutPage.css'
import dino from '../../assets/dino-image.jpg'

class LogOutPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1 id="login-message"> You have been signed in.</h1>
        <img src={dino} style={{marginTop: '2vh'}}/>
      </React.Fragment>
    )
  }
}

export default LogOutPage
