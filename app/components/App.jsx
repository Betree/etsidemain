import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Graph from './Graph'
import Modal from './Modal'


export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Modal/>

          <Route path="/" component={Categories}/>
          <Route exact path="/carte" component={Graph}/>
        </div>
      </Router>
    )
  }
}
