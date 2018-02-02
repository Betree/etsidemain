import React from 'react'
import LazyPlayer from '../Utils/LazyPlayer'


export default class ContributionContent extends React.PureComponent {
  render() {
    const {Content} = this.props.contribution

    // Show video player
    if (Content)
      return <LazyPlayer src={Content}/>

    // Show text
    return Content
  }
}
