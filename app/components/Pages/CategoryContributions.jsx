import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List } from 'immutable'

import { showModal } from '../../state/modal/reducer'
import { default as ContributionCard } from '../Contribution/Card'
import Icon from '../Utils/Icon'
import AnimationFactCard from '../Animations/AnimationFactCard'


@connect(state => ({contributions: state.Debate.contributions, facts: state.Debate.facts}), {showModal})
export default class CategoryContributions extends React.PureComponent {
  render() {
    const category = this.props.match.params.category
    const contributions = this.props.contributions.filter(c => c.category1 === category || c.category2 === category)

    return (
      <div className="page-category-contributions">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="button is-large" disabled>
                <Icon name="plus"/>
                <span>Participer</span>
              </div>
              <h1 className="title">
                {this.props.match.params.category}
              </h1>
              <h2 className="subtitle">
                <Link to="/categories">
                  <Icon name="arrow-left"/>&nbsp;
                  <span>Retour aux catégories</span>
                </Link>
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {this.renderContent(category, contributions)}
          </div>
        </section>
      </div>
    )
  }

  renderContent(category, contributions) {
    if (contributions.size === 0)
      return this.emptyCategory()

    // Split contributions in two batch (two columns) and mix with animated facts
    const facts = this.props.facts.get(category) || new List()
    const facts1 = facts.take(Math.floor(facts.size / 2) || 1).map(f => <AnimationFactCard key={f} fact={f}/>)
    const facts2 = facts.skip(Math.floor(facts.size / 2) || 1).map(f => <AnimationFactCard key={f} fact={f}/>)
    const contribs1 = contributions.take(Math.floor(contributions.size / 2) || 1).map(c => <ContributionCard key={c.id} contribution={c}/>)
    const contribs2 = contributions.skip(Math.floor(contributions.size / 2) || 1).map(c => <ContributionCard key={c.id} contribution={c}/>)
    const firstList = contribs1.zipAll(facts1)
    const secondList = facts2.zipAll(contribs2)
    return (
      <div className="columns">
        <div className="column is-6">{firstList}</div>
        <div className="column is-6">{secondList}</div>
      </div>
    )
  }

  emptyCategory() {
    return (
      <article className="message is-info">
        <div className="message-body is-size-4">
          <Icon name="info-circle"/>&nbsp;
          <span>Aucune contribution dans cette thématique. <a>Envoyez la votre !</a></span>
        </div>
      </article>
    )
  }
}