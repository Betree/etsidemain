import React from "react"
import { connect } from 'react-redux'


import { closeModal } from '../../state/modal/reducer'
import Contribution from './Content'
import ButtonsAction from './ButtonsAction'
import FactApprove from './FactApprove'
import FactRefute from './FactRefute'
import FactInfo from './FactInfo'
import {default as ContributionCard} from './Card'


@connect(state => ({contributions: state.Debate.contributions, data: state.Modal.data}), {closeModal})
export default class ContributionModal extends React.PureComponent {
  render() {
    const contribId = this.props.data.get('id')
    const contribution = this.props.contributions.find(c => c.id === contribId)
    console.log(typeof contribId)
    console.log(contribId)
    console.log(contribution)
    return (
      <ContributionCard contribution={contribution}/>
    )
  }
}
