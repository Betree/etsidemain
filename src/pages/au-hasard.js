import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { List } from 'immutable'

import Message from '../components/Utils/Message'
import Icon from '../components/Utils/Icon'
import { default as ContributionCard } from '../components/Contribution/Card'


export default class RandomContribution extends React.PureComponent {
  constructor(props) {
    props.data.dataJson.Contributions = props.data.dataJson.Contributions.map(c => {
      c.SpeakerPicture = require(`../assets/speakers/${c.id}.jpg`)
      return c
    })
    super(props)
    this.getRandomContrib = this.getRandomContrib.bind(this)
    this.state = {notSeenContribsIdx: this.randomContribsIndexes(props)}
  }

  render() {
    return (
      <div className="container page-random-contribution">
        <Helmet>
          <meta property="og:description" content="Une idée au hasard sur le futur du caillou !"/>
        </Helmet>
        {this.renderRandomButton()}
        {this.renderContribution()}
        {this.renderRandomButton()}
      </div>
    )
  }

  renderRandomButton() {
    return (
      <button className="button is-large" onClick={() => this.getRandomContrib()}>
        <Icon name="random"/>
        <span>Un autre !</span>
      </button>
    )
  }

  renderContribution() {
    const idx = this.state.notSeenContribsIdx.last()
    if (idx === undefined)
      return (
        <Message className="is-large is-success" header={<div><Icon name="trophy"/><span> &nbsp;Vous êtes fantastique!</span></div>}>
          <strong>Bravo !</strong> Vous avez regardé toutes les contributions disponnibles.<br/>
          Envie d'aller + loin ? <Link to="/aller-plus-loin">Interpellez vos élus ou rejoignez
          un débat</Link> organisé par une association prêt de chez vous.
          <br/><br/>
          Vous pouvez aussi cliquer sur <a onClick={() => this.getRandomContrib()}>Un autre !</a> pour
          relancer le mode aléatoire.
        </Message>
      )
    return <ContributionCard contribution={this.props.data.dataJson.Contributions[idx]}/>
  }

  randomContribsIndexes(props) {
    return new List(props.data.dataJson.Contributions.map((x, idx) => idx)).sortBy(Math.random)
  }

  getRandomContrib() {
    if (this.state.notSeenContribsIdx.size === 0)
      this.setState({notSeenContribsIdx: this.randomContribsIndexes(this.props)})
    else
      this.setState({notSeenContribsIdx: this.state.notSeenContribsIdx.pop()})
  }
}

export const query = graphql`
query AllContributions {
	dataJson {
	  Contributions {
      id,
      FirstName,
      LastName,
      Occupation,
      Title,
      Content,
      Confirm,
      Refute,
      Info,
      ReplyTo
    }
  }
}
`