import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { showModal } from '../../state/modal/reducer'
import { default as ContributionCard } from '../Contribution/Card'
import Icon from '../Utils/Icon'


@connect(state => ({contributions: state.Debate.contributions}), {showModal})
export default class CategoryContributions extends React.PureComponent {
  render() {
    const category = this.props.match.params.category
    const contributions = this.props.contributions.filter(c => c.category1 === category || c.category2 === category)

    if (contributions.size === 0)
      return "Nope"
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
            {contributions.map(c => (
              <div className="column is-6" key={c.id}>
                <ContributionCard contribution={c}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}