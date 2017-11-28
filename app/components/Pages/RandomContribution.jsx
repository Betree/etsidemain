import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../state/modal/reducer'
import {default as ContributionCard} from '../Contribution/Card'
import Icon from '../Utils/Icon'
import { getRandomContrib } from '../../state/debate/reducer'
import Message from '../Utils/Message'
import { Link } from 'react-router-dom'


@connect(state => ({contribution: state.Debate.randomContribution}), {showModal, getRandomContrib})
export default class RandomContribution extends React.PureComponent {
  componentDidMount() {
    this.props.getRandomContrib()
  }

  render() {
    return (
      <div className="container page-random-contribution">
        {this.renderRandomButton()}
        {this.renderContribution()}
        {this.renderRandomButton()}
      </div>
    )
  }

  renderRandomButton() {
    return (
      <button className="button is-large" onClick={() => this.props.getRandomContrib()}>
        <Icon name="random"/>
        <span>Un autre !</span>
      </button>
    )
  }

  renderContribution() {
    if (this.props.contribution === null)
      return (
        <Message className="is-large is-success"
                 header={<div><Icon name="trophy"/><span> &nbsp;Vous êtes fantastique!</span></div>}
                 body={
                   <p>
                     <strong>Bravo !</strong> Vous avez regardé toutes les contributions disponnibles.
                     Envie d'aller + loin ? <Link to="/aller-plus-loin">Interpellez vos élus ou rejoignez
                     un débat</Link> organisé par une association prêt de chez vous.
                     <br/><br/>
                     Vous pouvez aussi cliquer sur <a onClick={() => this.props.getRandomContrib()}>Un autre !</a> pour
                     relancer le mode aléatoire.
                   </p>
                 }/>
      )
    return <ContributionCard contribution={this.props.contribution}/>
  }
}