import React from 'react'
import ReactPlayer from 'react-player'


export default class ContributionContent extends React.PureComponent {
  render() {
    const {content} = this.props.contribution

    // Show video player
    if (content)
      return <ReactPlayer className="video" url={content} config={{youtube: {playerVars: {modestbranding: 1, controls: 1}}}}/>

    // Show text
    return content
  }
}