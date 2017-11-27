import React from 'react'
import { Player } from 'video-react'


export default class ContributionContent extends React.PureComponent {
  render() {
    const {content} = this.props.contribution
    // Show video player
    if (!content)
      return <Player src={`/videos/${this.props.contribution.id}.mp4`} type="video/mp4" muted/>

    // Show text
    return content
  }
}