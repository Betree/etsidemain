import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


@connect(state => ({contributions: state.Debate.categories}))
export default class CategoryContributions extends React.PureComponent {
  render() {
    console.log(this.props)
    return (
      <div className="container page-category-arguments">
        <div className="columns is-multiline">

        </div>
      </div>
    )
  }
}