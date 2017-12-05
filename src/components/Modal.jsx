import React from "react"


export default class Modal extends React.PureComponent {
  render() {
    const {display='modal', isActive=true} = this.props
    if (!isActive)
      return null

    return (
      <div className="modal is-active">
        {display === 'modal' && this.renderModal()}
        {display === 'popup' && this.renderPopup()}
        {display === 'card' && this.renderCard()}
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
      <div className="modal-background popup" onClick={this.props.onClose}/>
      {this.props.children}
    </div>

  renderCard = () =>
    <div>
      <div className="modal-background popup" onClick={this.props.onClose}/>
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">{this.props.title}</div>
          <button className="delete" aria-label="close" onClick={this.props.onClose}/>
        </header>
        <section className="modal-card-body">
          {this.props.children}
        </section>
      </div>
    </div>
}
