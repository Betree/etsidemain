import React from 'react'
import ReactPlayer from 'react-player'


export default class ContributionContent extends React.PureComponent {
  render() {
    const {content} = this.props.contribution

    // Show video player
    if (content)
      return <YoutubeVideo src={content}/>

    // Show text
    return content
  }
}


const YoutubeVideo = ({src}) =>
  <div className="video">
    <div>
      <iframe src={src.replace('https://youtu.be/', 'https://www.youtube-nocookie.com/embed/') + '?showinfo=0&hl=fr&fs=0'}/>
    </div>
  </div>