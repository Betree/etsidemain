import React from 'react'
import Link from 'gatsby-link'

import Modal from '../Modal'
import Icon from '../Utils/Icon'
import Share from '../Utils/Share'


// TODO set replyingTo when replying

export default class ButtonsAction extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {isSharing: false}
  }

  render() {
    const {size="large", className="", buttonClassName="", contribution} = this.props
    return (
      <div className={className}>
        <div className="columns is-multiline is-gapless is-mobile">
          <Link to="/participer" className={`button is-${size} ${buttonClassName}`}>
            <Icon name="reply" size={size}/>
            <span>Répondre</span>
          </Link>
          <a className={`button is-${size} ${buttonClassName}`} onClick={() => this.setState({isSharing: true})}>
            <Icon name="share-alt" size={size}/>
            <span>Partager</span>
          </a>
          {this.state.isSharing === true &&
            <Modal onClose={() => this.setState({isSharing: false})} display="card"
                   title={<div><Icon name="share-alt"/><span> &nbsp;Partager</span></div>}>
              <Share message={`${contribution.FirstName} ${contribution.LastName} - "${contribution.Title}"`}
                     hashTags={['EtSiDemain', 'NouvelleCalédonie', '2018']}
                     url={`https://etsidemain.nc/contribution/${contribution.id}`}/>
            </Modal>
          }
        </div>
      </div>
    )
  }
}
