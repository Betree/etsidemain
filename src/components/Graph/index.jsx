import React from "react"

import Modal from '../Modal'
import { default as ContributionCard } from '../Contribution/Card' 
import GraphContainer from './GraphContainer'


export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {selectedContrib: null}
    this.showContrib = this.showContrib.bind(this)
  }

  render() {
    return (
      <div>
        <GraphContainer 
          categories={this.props.categories} 
          contributions={this.props.contributions} 
          onContribSelected={this.showContrib}/>
        <Modal isActive={!!this.state.selectedContrib} onClose={() => this.setState({selectedContrib: null})}>
          <ContributionCard contribution={this.state.selectedContrib}/>
        </Modal>
      </div>
    )
  }

  showContrib(contribId) {
    this.setState({selectedContrib: this.getContrib(contribId)})
  }

  getContrib(id) {
    for (let contrib of this.props.contributions)
      if (contrib.id === id)
        return contrib
    return null
  }
}
