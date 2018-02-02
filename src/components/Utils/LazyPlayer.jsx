import React, { PureComponent } from 'react'
import ReactPlayer from 'react-player'

import { youtubeId, youtubeThumbnail } from '../../lib/url_utils'
import Icon from './Icon'


export default class LazyPlayer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {isLoaded: false}
  }

  render() {
    const videoId = youtubeId(this.props.src)
    if (!this.state.isLoaded)
      return (
        <div className="lazy-player" onClick={() => this.setState({isLoaded: true})}>
          <img src={youtubeThumbnail(videoId)}/>
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
