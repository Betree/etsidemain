import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


@connect(state => ({categories: state.Debate.categories}))
export default class Categories extends React.PureComponent {
  render() {
    return (
      <div className="container page-categories">
        <div className="columns is-multiline">
        {this.props.categories.map(c => (
          <div className="column is-4" key={c}>
            <Link to={`/categories/${c}`} className="card">
              <div className="card-image">
                <figure className="image is-2by1">
                  <img src="https://bulma.io/images/placeholders/640x320.png" alt="Category Image"/>
                </figure>
              </div>
              <div className="card-content">
                <h3 className="title is-3 has-text-centered">{c}</h3>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    )
  }
}