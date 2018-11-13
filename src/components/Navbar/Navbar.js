import React from 'react'
import logo from '../../assets/small-logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

const Navbar = (props) => {
  return (
    <div id="top-menu" className="ui top fixed menu">
      <div id="header-logo-div" className="item white-text">
        <img id="header-logo" src={logo} alt='black-lotus-logo'/>
      </div>
      <h1 className="item white-text logo-text">black lotus</h1>
      <Link className="item white-text menu-button" to={`/cards`}>Cards</Link>

      <Dropdown className="item white-text menu-button" text="Decks">
        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item style={{backgroundColor: 'black'}} className="dropdown-link" as={Link} to={'/decks'} text="View Decks"/>
          <Dropdown.Item className="dropdown-link" as={Link} to={'/deckbuilder'} text="Deck Builder"/>
        </Dropdown.Menu>
      </Dropdown>


      {props.userInfo ?
        <div className="item white-text menu-button" onClick={props.logout}>Sign Out</div> :
        <Link className="item white-text menu-button" to={`/signin`}>Sign In</Link>
      }





    </div>
  )
}

// <Link className="item white-text menu-button" to={`/decks`}>Decks</Link>

export default Navbar
