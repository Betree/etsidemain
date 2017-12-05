import React from 'react'

import Icon from '../Utils/Icon'
import Modal from '../Modal'
import Share from '../Utils/Share'


export default class AnimationFactCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {isSharing: false}
  }

  render() {
    const video = require(`../../assets/facts/${this.props.category}/${this.props.fact.video}`)
    const image = require(`../../assets/facts/${this.props.category}/${this.props.fact.image}`)

    return (
      <div className="card fact">
        <div className="card-image">
          <video src={video} poster={image} ref="player" autoPlay muted loop/>
        </div>
        <div className="card-footer">
          <div className="button is-medium card-footer-item" onClick={() => this.setState({isSharing: true})}>
            <Icon name="share-alt"/>
            <span>Partager</span>
          </div>
        </div>
        {this.state.isSharing === true &&
          <Modal onClose={() => this.setState({isSharing: false})} display="card"
                 title={<div><Icon name="share-alt"/><span> &nbsp;Partager</span></div>}>
            <Share hashTags={['EtSiDemain', 'NouvelleCalédonie', '2018']}
                   url={`https://etsidemain.nc/info/${this.props.fact.name}`}/>
          </Modal>
        }
      </div>
    )
  }
}