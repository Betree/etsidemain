import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List } from 'immutable'

import { showModal } from '../../state/modal/reducer'
import { default as ContributionCard } from '../Contribution/Card'
import Icon from '../Utils/Icon'
import AnimationFactCard from '../Animations/AnimationFactCard'
import Message from '../Utils/Message'


@connect(state => ({contributions: state.Debate.contributions, facts: state.Debate.facts}), {showModal})
export default class CategoryContributions extends React.PureComponent {
  render() {
    const category = this.props.match.params.category
    const contributions = this.props.contributions.filter(c => c.category1 === category || c.category2 === category)
    const facts = this.props.facts.get(category) || new List()

    if (contributions.size === 0)
      return <section className="section">
        <div className="content">
          <article className="message is-info">
            <div className="message-body is-size-4">
              <Icon name="info-circle"/>&nbsp;
              <span>Aucune contribution dans cette thématique. <a>Envoyez la votre !</a></span>
            </div>
          </article>
        </div>
      </section>

    // Mix facts with contributions. TODO: Refactor
    let allCards = null
    if (contributions.size !== 0 && facts.size !== 0)
      allCards = [
        <div className="column is-6" key="col1">
          {this.renderFacts(facts, "12").concat(this.renderContributions(new List([contributions.last()]), "12"))}
        </div>,
        <div className="column is-6" key="col2">
          {this.renderContributions(contributions.butLast(), "12")}
        </div>
      ]
    else
      allCards = this.renderContributions(contributions)

    return (
      <div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.props.match.params.category}
              </h1>
              <h2 className="subtitle">
                <Link to="/categories">
                  <Icon name="arrow-left"/>&nbsp;
                  <span>Retour au catégories</span>
                </Link>
              </h2>
            </div>
          </div>
        </section>
        <div className="container page-category-arguments">
          <div className="columns is-multiline">
            {allCards}
          </div>
        </div>
      </div>
    )
  }

  renderContributions(contributions, size="6") {
    return contributions.map(c => (
      <div className={`column is-${size}`} key={c.id}>
        <ContributionCard contribution={c}/>
      </div>
    ))
  }

  renderFacts(facts, size="6") {
    return facts.map(f => (
      <div className={`column is-${size}`} key={f}>
        <AnimationFactCard fact={f}/>
      </div>
    ))
  }
}