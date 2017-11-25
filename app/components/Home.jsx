import React from 'react'
import { Player } from 'video-react'
import { closeModal, showModal } from '../state/modal/reducer'
import { connect } from 'react-redux'
import Icon from './Utils/Icon'


@connect(null, {showModal})
export default class Home extends React.PureComponent {
  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  render() {
    return (
      <div className="page-home">
        <Player ref="player" src="/videos/intro.mp4" autoPlay={true} fluid={false}/>
      </div>
    )
  }

  handleStateChange(state, prevState) {
    if (state.ended && !prevState.ended)
      this.props.showModal({type: PopupContent, display: 'popup'})
  }
}

const PopupContent = connect(null, {closeModal})(({closeModal}) =>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Commencez la visite !</p>
      <button className="delete" aria-label="close" onClick={closeModal}/>
    </header>
    <section className="modal-card-body">
      <h2 className="has-text-centered title is-4">Je m'informe...</h2>
      <div className="field is-grouped">
        <Button iconName="" label="En survolant"/>
        <Button iconName="random" label="Au hasard"/>
        <Button iconName="line-chart" label="En profondeur"/>
      </div>
    </section>
  </div>
)

const Button = ({label, iconName}) =>
  <p className="control">
    <a className="button is-large is-info">
      <Icon name={iconName}/>
      <span>{label}</span>
    </a>
  </p>