import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../state/modal/reducer'
import {default as ContributionCard} from '../Contribution/Card'
import Icon from '../Utils/Icon'


@connect(state => ({contributions: state.Debate.contributions}), {showModal})
export default class RandomContribution extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {contributionIdx: this.randomContributionIdx()}
  }

  componentDidUpdate(oldProps) {
    if (oldProps.contributions.size === 0 || !this.state.contributionIdx)
      this.setNewRandom()
  }

  setNewRandom() {
    this.setState({contributionIdx: this.randomContributionIdx()})
  }

  randomContributionIdx() {
    if (this.props.contributions.size === 0)
      return null
    else if (this.props.contributions.size === 1)
      return this.props.contributions.get(0)
    else if (!this.state)
      return Math.floor(Math.random() * this.props.contributions.size)

    // Choose a new random idx, avoid taking previous one
    let random = this.state.contributionIdx || Math.floor(Math.random() * this.props.contributions.size)
    while (random === this.state.contributionIdx) {
      random = Math.floor(Math.random() * this.props.contributions.size)
    }
    return random
  }

  render() {
    if (this.state.contributionIdx === null)
      return null
    const contribution = this.props.contributions.get(this.state.contributionIdx)
    return (
      <div className="container page-random-contribution">
        <button className="button is-large" onClick={() => this.setNewRandom()}>
          <Icon name="random"/>
          <span>Un autre !</span>
        </button>
        <ContributionCard contribution={contribution}/>
      </div>
    )
  }
}