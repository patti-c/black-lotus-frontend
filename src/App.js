import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CardsPage from './containers/CardsPage/CardsPage'
import DecksPage from './containers/DecksPage/DecksPage'
import SignInPageContainer from './containers/SignInPageContainer/SignInPageContainer'
import NotFound from './components/NotFound/NotFound'
import DeckBuilder from './containers/DeckBuilder/DeckBuilder'
import DeckView from './components/DeckView/DeckView'

class App extends Component {

  constructor() {
    super()
    this.state = {
      userInfo: null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/decks`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(data => {
        this.setState({
          userInfo: data.user
        })
      })
    }
  }

  updateUserInfo = (data) => {
    this.setState({
      userInfo: data
    })
  }

  logout = () => {
    localStorage.clear()
    this.setState({userInfo: null})
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div id="background" className="background">
            <Navbar
              className="content"
              userInfo = {this.state.userInfo}
              logout = {this.logout}
            />
            <div className="page-container content">
              <Switch>
                <Route exact path='/' render={() => (<Redirect to='/cards'/>)} />
                <Route
                  exact path={`/cards`}
                  render={() => <CardsPage className="content"/>}
                />
                <Route
                  exact path={`/decks`}
                  render={() => <DecksPage updateUserInfo={this.updateUserInfo} userInfo={this.state.userInfo} />}
                />
                <Route
                  exact path={`/signin`}
                  render={() =>
                    <SignInPageContainer
                      userInfo={this.state.userInfo}
                      updateUserInfo={this.updateUserInfo}
                      logout={this.logout}
                    />}
                />

                {this.state.userInfo ?
                  <React.Fragment>
                    <Route
                    path={`/decks/:deckId`}
                    render={routerProps => <DeckView {...routerProps} decks={this.state.userInfo.decks}/>}
                    />
                    <Route
                      exact path={`/deckbuilder`}
                      render={() =>
                        <DeckBuilder
                          userInfo={this.state.userInfo}
                          updateUserInfo={this.updateUserInfo}
                        />}
                    />
                  </React.Fragment>
                  :
                  null
                }
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
