import React from "react"


export default class Modal extends React.PureComponent {
  render() {
    if (!this.props.isActive)
      return null

    const {display='modal'} = this.props
    return (
      <div className="modal is-active">
        {display === 'modal' && this.renderModal()}
        {display === 'popup' && this.renderPopup()}
      </div>
    )
  }

  renderModal = () =>
    <div>
      <div className="modal-background" onClick={this.props.onClose}/>
      <div className="modal-content">
        {this.props.children}
        <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}/>
      </div>
    </div>

  renderPopup = () =>
    <div>
      <div className="modal-background popup"/>
      {this.props.children}
    </div>
}
