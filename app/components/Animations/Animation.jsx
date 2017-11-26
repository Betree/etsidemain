import React from 'react'
import { Link } from 'react-router-dom'


export default class Animation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {isPlaying: false}
  }

  render() {
    console.log(this.props.src)
    return (
      <div className={this.props.className}>
        {this.renderAnimation()}
      </div>
    )
  }

  renderAnimation() {
    if (this.props.linkTo)
      return (
        <Link to={this.props.linkTo}
              onMouseEnter={this.startAnimation.bind(this)}
              onMouseLeave={this.stopAnimation.bind(this)}>
          <video src={this.props.src} ref="player"/>
        </Link>
      )
    else
      return <video src={this.props.src} ref="player" autoPlay muted loop/>
  }

  startAnimation() {
    this.refs.player.playbackRate = 1.75
    this.refs.player.play()
  }

  stopAnimation() {
    this.refs.player.pause()
    this.refs.player.currentTime = 0
  }
}