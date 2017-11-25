import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Graph from './Graph'
import Modal from './Utils/Modal'
import Categories from './Pages/Categories'
import { connect } from 'react-redux'
import { fetchData } from '../state/debate/effects'
import CategoryContributions from './Pages/CategoryContributions'
import RandomContribution from './Pages/RandomContribution'
import Home from './Home'
import GoFurther from './Pages/GoFurther'


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
            <Route exact path="/" component={Home}/>
            <Route path="/aller-plus-loin" component={GoFurther}/>
            <Route path="/categories/:category" component={CategoryContributions}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/au-hasard" component={RandomContribution}/>
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