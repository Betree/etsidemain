import React from 'react'
import { connect } from 'react-redux'
import Animation from '../Animations/Animation'


@connect(state => ({categories: state.Debate.categories}))
export default class Categories extends React.PureComponent {
  render() {
    return (
      <div className="container page-categories">
        <div className="columns is-multiline">
        {this.props.categories.map(c => (
          <Animation className="column is-3" key={c} src={`/animations/categories/${c}.mp4`}
                     linkTo={`/categories/${c}`}/>
        ))}
        </div>
      </div>
    )
  }
}

