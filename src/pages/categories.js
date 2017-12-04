import React from 'react'
import Link from 'gatsby-link'
import slugify from 'voca/slugify'


export default class Categories extends React.PureComponent {
  render() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 700
    const categories = this.props.data.dataJson.Categories
    return (
      <div className="section page-categories">
        <div className="container columns is-multiline is-centered">
        {isMobile === true && categories.map(c => <StaticCategory key={c} category={c} slug={slugify(c)}/>)}
        {isMobile === false && categories.map(c => <AnimatedCategory key={c} category={c} slug={slugify(c)}/>)}
        </div>
      </div>
    )
  }
}

export const query = graphql`
query IndexQuery {
	dataJson {
	  Categories
  }
}
`

class StaticCategory extends React.PureComponent {
  render() {
    const imgSrc = require(`../assets/categories/${this.props.category}.jpg`)
    return (
      <Link to={`/categories/${this.props.slug}`} className="column is-one-quarter-desktop is-half-tablet">
        <img src={imgSrc} alt={this.props.category}/>
      </Link>
    )
  }
}

class AnimatedCategory extends React.PureComponent {
  componentDidMount() {
    this.refs.player.playbackRate = 1.5
  }

  render() {
    const imgSrc = require(`../assets/categories/${this.props.category}.jpg`)
    const videoSrc = require(`../assets/categories/${this.props.category}.mp4`)
    return (
      <Link to={`/categories/${this.props.slug}`}
            className="column is-one-quarter-desktop is-half-tablet"
            onMouseEnter={this.startAnimation.bind(this)}
            onMouseLeave={this.stopAnimation.bind(this)}>
        <video src={videoSrc}
               poster={imgSrc}
               ref="player">
          {this.props.category}
        </video>
      </Link>
    )
  }

  startAnimation() {
    this.refs.player.play()
  }

  stopAnimation() {
    this.refs.player.pause()
    this.refs.player.currentTime = 0
  }
}