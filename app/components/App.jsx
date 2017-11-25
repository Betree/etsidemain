import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Graph from './Graph'
import Modal from './Modal'
import Categories from './Pages/Categories'
import { connect } from 'react-redux'
import { fetchData } from '../state/debate/effects'
import CategoryContributions from './Pages/CategoryContributions'


@connect(null, {fetchData})
export default class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Modal/>

          <Switch>
            <Route path="/contributions" component={Categories}/>
            <Route path="/categories/:category" component={CategoryContributions}/>
            <Route path="/carte" component={Graph}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

function NotFound() {
  return (
    <section className="section">
      <div className="content">
        <article className="message is-danger">
          <div className="message-body is-size-4">
            404 Democracy Not Found - <strong>La page demandée n'as pas été trouvée :(</strong>
          </div>
        </article>
      </div>
    </section>
  )
}