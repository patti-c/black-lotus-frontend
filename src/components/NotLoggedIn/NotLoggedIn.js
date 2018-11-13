import React from 'react'
import './NotLoggedIn.css'
import rejection from '../../assets/ceremonious-rejection.jpg'

const NotLoggedIn = () => {
  return (
    <div id="not-logged-in-header">
      <h2 id="first-line">You Must Be Logged In</h2>
      <h2 id="second-line">To View Your Decks</h2>
      <img id="rejection" src={rejection} alt='You must be logged in.'/>
    </div>
  )
}

export default NotLoggedIn
