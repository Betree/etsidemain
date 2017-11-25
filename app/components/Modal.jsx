import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../state/modal/reducer'
import Contribution from './Contribution'


@connect(state => ({isActive: state.Modal.isActive, data: state.Modal.data}), {closeModal})
export default class Modal extends React.PureComponent {
  render() {
    if (!this.props.isActive)
      return null

    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal}/>
        <div className="modal-content">
          <Contribution content={this.props.data.get('content')}/>
          <hr/>
          <div className="columns">
            <div className="column">{this.renderConfirm()}</div>
            <div className="column">{this.renderRefute()}</div>
          </div>
          {this.renderResume()}
          <hr/>
          {this.renderButtons()}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}/>
      </div>
    )
  }

  renderConfirm() {
    return (
      <article className="message is-success">
        <div className="message-header">
          <p>C'est pas faux !</p>
        </div>
        <div className="message-body">
          Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
      </article>
    )
  }

  renderRefute() {
    return (
      <article className="message is-danger">
        <div className="message-header">
          <p>Mouais...</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
        </div>
      </article>
    )
  }

  renderResume() {
    return (
      <article className="message is-info">
        <div className="message-header">
          <p>En vous en dit +</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
      </article>
    )
  }

  renderButtons() {
    return (
      <div className="buttons">
        <span className="button is-large is-link" onClick={this.props.closeModal}>Voir les réponses</span>
        <span className="button is-large is-link">Partager</span>
        <span className="button is-large is-link">Répondre</span>
      </div>
    )
  }
}
