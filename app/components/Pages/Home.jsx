import React from 'react'
import ReactPlayer from 'react-player'
import { closeModal, showModal } from '../../state/modal/reducer'
import { connect } from 'react-redux'
import Icon from '../Utils/Icon'
import { Link } from 'react-router-dom'


@connect(null, {showModal})
export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="page-home">
        <ReactPlayer url='https://youtu.be/QHD-5Glqc9U'
                     className="video"
                     onEnded={() => this.onEnded()}
                     config={{youtube: {playerVars: {modestbranding: 1}}
        }}/>
      </div>
    )
  }

  onEnded() {
    this.props.showModal({type: PopupContent, display: 'popup'})
  }
}

const PopupContent = connect(null, {closeModal})(({closeModal}) =>
  <div className="modal-card start-visit-popup-card">
    <section className="modal-card-body">
      <h2 className="has-text-centered title is-4">Je m'informe...</h2>
      <div className="columns">
        <Button onClick={closeModal} url="/categories" iconName="tags" label="Par catégorie"/>
        <Button onClick={closeModal} url="/au-hasard" iconName="random" label="Au hasard"/>
        <Button onClick={closeModal} url="/carte" iconName="line-chart" label="En mode expert"/>
      </div>
    </section>
  </div>
)

const Button = ({label, iconName, url, onClick}) =>
  <p className="control column has-text-centered">
    <Link to={url} className="button is-large is-info" onClick={onClick}>
      <Icon name={iconName}/>
      <span>{label}</span>
    </Link>
  </p>