import React from 'react'
import ReactPlayer from 'react-player'

import PopupNav from '../components/Home/PopupNav'
import Modal from '../components/Modal'


export default class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {hasModal: false}
  }

  render() {
    return (
      <div className="page-home">
        <ReactPlayer url='https://www.youtube.com/watch?v=rMwvVKs7W4k'
                     className="video"
                     width="1920"
                     onEnded={() => this.onEnded()}
                     config={{youtube: {playerVars: {modestbranding: 1, origin: 'demo.etsidemain.nc', hl: 'fr', cc_load_policy: 0}}}}
                     />
        <Modal display="popup" isActive={this.state.hasModal}>
          <PopupNav/>
        </Modal>
      </div>
    )
  }

  onEnded() {
    this.setState({hasModal: true})
  }
}
