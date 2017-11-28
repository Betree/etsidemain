import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


@connect(state => ({categories: state.Debate.categories}))
export default class Categories extends React.PureComponent {
  render() {
    return (
      <div className="section page-categories">
        <div className="container columns is-multiline is-centered">
        {this.props.categories.map(c => <AnimatedCategory key={c} category={c}/>)}
        </div>
      </div>
    )
  }
}


class AnimatedCategory extends React.PureComponent {
  componentDidMount() {
    this.refs.player.playbackRate = 1.75
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
    this.refs.player.currentTime = 0.1
    this.refs.player.play()
  }

  stopAnimation() {
    this.refs.player.pause()
    this.refs.player.currentTime = 0
  }
}