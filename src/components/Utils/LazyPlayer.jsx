import React, { PureComponent } from 'react'
import ReactPlayer from 'react-player'

import Icon from './Icon'


export const youtubeRegex =
  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i

export default class LazyPlayer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {isLoaded: false}
  }

  render() {
    const videoId = youtubeRegex.exec(this.props.src)[1]
    if (!this.state.isLoaded)
      return (
        <div className="lazy-player" onClick={() => this.setState({isLoaded: true})}>
          <img src={`http://img.youtube.com/vi/${videoId}/sddefault.jpg`}/>
          <Icon name="video"/>
        </div>
      )

    return (
      <div className="video">
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?showinfo=0&hl=fr&fs=0&autoplay=1`}/>
        </div>
      </div>
    )
  }
}
