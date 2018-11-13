import React, {Component} from 'react'
import SignInPage from '../SignInPage/SignInPage'
import LogOutPage from '../LogOutPage/LogOutPage'

class SignInPageContainer extends Component {

  render() {
    return(
      <React.Fragment>
      {this.props.userInfo ?
        <LogOutPage logout={this.props.logout}/>
         :
         <SignInPage
           userInfo={this.props.userInfo}
           updateUserInfo={this.props.updateUserInfo}
         />
      }
      </React.Fragment>
    )
  }
}

export default SignInPageContainer
