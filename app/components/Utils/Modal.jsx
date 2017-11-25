import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../../state/modal/reducer'


@connect(({Modal: {isActive, type, display}}) => ({isActive, type, display}), {closeModal})
export default class Modal extends React.PureComponent {
  render() {
    if (!this.props.isActive)
      return null

    return (
      <div className="modal is-active">
        {this.props.display === 'modal' && this.renderModal()}
        {this.props.display === 'popup' && this.renderPopup()}
      </div>
    )
  }

  renderModal = () =>
    <div>
      <div className="modal-background" onClick={this.props.closeModal}/>
      <div className="modal-content">
        <this.props.type/>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}/>
      </div>
    </div>

  renderPopup = () =>
    <div>
      <div className="modal-background popup"/>
      <this.props.type/>
    </div>
}
