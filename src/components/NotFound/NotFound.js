import React from 'react'
import './NotFound.css'
import notfound from '../../assets/never-happened.jpeg'

const NotFound = () => {
  return(
    <React.Fragment>
      <h1 id="not-found-header">404 Not Found</h1>
      <img id="image404" src={notfound} alt="404 Not Found"/>
    </React.Fragment>
  )
}

export default NotFound
