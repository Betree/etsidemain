import React from "react"
import classNames from 'classnames'


export default class Icon extends React.PureComponent {
  render() {
    const {name, size, className=null} = this.props

    return (
      <span className={classNames('icon', className, {[`is-${size}`]: !!size})}>
        <i className={`fa fa-${name}`}/>
      </span>
    )
  }
}
