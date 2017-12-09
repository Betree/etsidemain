import React from 'react'


export default class ContributionContent extends React.PureComponent {
  render() {
    const {Content} = this.props.contribution

    // Show video player
    if (Content)
      return <YoutubeVideo src={Content}/>

    // Show text
    return Content
  }
}


const YoutubeVideo = ({src}) =>
  <div className="video">
    <div>
      <iframe src={src.replace('https://youtu.be/', 'https://www.youtube-nocookie.com/embed/') + '?showinfo=0&hl=fr&fs=0'}/>
    </div>
  </div>