import React from 'react'
import Link from 'gatsby-link'
import { List } from 'immutable'
import Helmet from 'react-helmet'

import { default as ContributionCard } from '../components/Contribution/Card'
import Icon from '../components/Utils/Icon'
import AnimationFactCard from '../components/Animations/AnimationFactCard'


export default class CategoryContributions extends React.PureComponent {
  constructor(props) {
    props.pathContext.contributions = props.pathContext.contributions.map(c => {
      c.SpeakerPicture = require(`../assets/speakers/${c.id}.jpg`)
      return c
    })
    super(props)
  }

  render() {
    const category = this.props.pathContext.category
    const contributions = new List(this.props.pathContext.contributions)
    const facts = new List(this.props.pathContext.facts)

    return (
      <div className="page-category-contributions">
        <Helmet>
          <meta property="og:description" content={`Les contributions de la catégorie "${category}"`}/>
        </Helmet>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <Link to="/participer" className="button is-large">
                <Icon name="plus"/>
                <span>Participer</span>
              </Link>
              <h1 className="title">
                {category}
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
            {this.renderContent(category, contributions, facts)}
          </div>
        </section>
      </div>
    )
  }

  renderContent(category, contributions, facts) {
    if (contributions.size === 0 && facts.size === 0)
      return this.emptyCategory()

    // Split contributions in two batch (two columns) and mix with animated facts
    const prepareAnimation = f =>
      <AnimationFactCard key={f} fact={f} 
        video={require(`../assets/facts/${category}/${f.video}`)} 
        image={require(`../assets/facts/${category}/${f.image}`)}
      />
    const facts1 = facts.take(Math.floor(facts.size / 2) || 1).map(prepareAnimation)
    const facts2 = facts.skip(Math.floor(facts.size / 2) || 1).map(prepareAnimation)
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
