import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import HelloWorld from './HelloWorld'


export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={HelloWorld}/>
        </div>
      </Router>
    )
  }
}
