import React from "react"
import classNames from 'classnames'


export default class Icon extends React.PureComponent {
  render() {
    const {name, size} = this.props

    return (
      <span className={classNames('icon', {[`is-${size}`]: !!size})}>
        <i className={`fa fa-${name}`}/>
      </span>
    )
  }
}
