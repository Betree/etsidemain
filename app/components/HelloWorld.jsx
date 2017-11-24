import React from "react"
import { connect } from 'react-redux'
import { updateMessage } from '../state/hello_world/reducer'


@connect(state => ({message: state.HelloWorld.message}), {updateMessage})
export default class HelloWorld extends React.PureComponent {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title" onClick={this.props.updateMessage}>
            {this.props.message}
          </h1>
          <p className="subtitle my-custom-class">
            Styled with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    )
  }
}
