import React from 'react'
import { Player } from 'video-react'
import { closeModal, showModal } from '../state/modal/reducer'
import { connect } from 'react-redux'
import Icon from './Utils/Icon'
import { Link } from 'react-router-dom'


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
  <div className="modal-card start-visit-popup-card">
    <section className="modal-card-body">
      <h2 className="has-text-centered title is-4">Je m'informe...</h2>
      <div className="field is-grouped">
        <Button onClick={closeModal} url="/categories" iconName="bicycle" label="En survolant"/>
        <Button onClick={closeModal} url="/au-hasard" iconName="random" label="Au hasard"/>
        <Button onClick={closeModal} url="/carte" iconName="line-chart" label="En profondeur"/>
      </div>
    </section>
  </div>
)

const Button = ({label, iconName, url, onClick}) =>
  <p className="control">
    <Link to={url} className="button is-large is-info" onClick={onClick}>
      <Icon name={iconName}/>
      <span>{label}</span>
    </Link>
  </p>