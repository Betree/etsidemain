import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../state/modal/reducer'
import Contribution from './Contribution/Contribution'
import ButtonsAction from './Contribution/ButtonsAction'
import Message from './Utils/Message'
import FactApprove from './Contribution/FactApprove'
import FactRefute from './Contribution/FactRefute'
import FactInfo from './Contribution/FactInfo'


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
            <div className="column">
              <FactApprove message="Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum."/>
            </div>
            <div className="column">
              <FactRefute message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            </div>
          </div>
          <FactInfo message="Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"/>
          <hr/>
          <ButtonsAction/>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}/>
      </div>
    )
  }
}
