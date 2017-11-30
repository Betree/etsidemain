import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../../state/modal/reducer'
import { default as ContributionCard } from './Card'


@connect(state => ({data: state.Modal.data}), {closeModal})
export default class ContributionModal extends React.PureComponent {
  render() {
    return <ContributionCard contribution={this.props.data.get('contribution').toJS()}/>
  }
}
