import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Graph from './Graph'
import Modal from './Utils/Modal'
import Categories from './Pages/Categories'
import { connect } from 'react-redux'
import { fetchData, fetchFacts } from '../state/debate/effects'
import CategoryContributions from './Pages/CategoryContributions'
import RandomContribution from './Pages/RandomContribution'
import Home from './Home'
import GoFurther from './Pages/GoFurther'
import { LoadingFrame } from './Utils/LoadingFrame'


@connect(
  state => ({isLoading: state.Debate.isLoadingFacts || state.Debate.isLoadingContributions}),
  {fetchData, fetchFacts}
)
export default class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData()
    this.props.fetchFacts()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Modal/>
          <Route exact path="/" component={Home}/>
          {this.renderRoutes()}
        </div>
      </Router>
    )
  }

  renderRoutes = () => {
    if (this.props.isLoading)
      return (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route render={() => <LoadingFrame withLabel={true}/>}/>
        </Switch>
      )
    return (
      <Switch>
        <Route path="/aller-plus-loin" component={GoFurther}/>
        <Route path="/categories/:category" component={CategoryContributions}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/au-hasard" component={RandomContribution}/>
        <Route path="/carte" component={Graph}/>
        <Route component={NotFound}/>
      </Switch>
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