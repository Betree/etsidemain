import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../../state/modal/reducer'


@connect(state => ({isActive: state.Modal.isActive, type: state.Modal.type}), {closeModal})
export default class Modal extends React.PureComponent {
  render() {
    if (!this.props.isActive)
      return null

    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal}/>
        <div className="modal-content">
          <this.props.type/>
          <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}/>
        </div>
      </div>
    )
  }
}
