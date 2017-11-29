import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'


export default class Categories extends React.PureComponent {
  render() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 700
    const categories = this.props.data.allDataJson.edges[0].node.Categories
    return (
      <div className="section page-categories">
        <div className="container columns is-multiline is-centered">
        {isMobile === true && categories.map(c => <StaticCategory key={c} category={c}/>)}
        {isMobile === false && categories.map(c => <AnimatedCategory key={c} category={c}/>)}
        </div>
      </div>
    )
  }
}

export const query = graphql`
query IndexQuery {
	allDataJson {
	  edges {
	    node {
        Categories
      }
    }
  }
}
`

class StaticCategory extends React.PureComponent {
  render() {
    return (
      <Link to={`/categories/${this.props.category}`} className="column is-one-quarter-desktop is-half-tablet">
        <img src={`/animations/categories/${this.props.category}.jpg`}/>
      </Link>
    )
  }
}

class AnimatedCategory extends React.PureComponent {
  componentDidMount() {
    this.refs.player.playbackRate = 1.5
  }

  render() {
    return (
      <Link to={`/categories/${this.props.category}`}
            className="column is-one-quarter-desktop is-half-tablet"
            onMouseEnter={this.startAnimation.bind(this)}
            onMouseLeave={this.stopAnimation.bind(this)}>
        <video src={`/animations/categories/${this.props.category}.mp4`}
               poster={`/animations/categories/${this.props.category}.jpg`}
               ref="player"/>
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