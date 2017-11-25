import React from 'react'
import classNames from 'classnames'


const Message = ({header, body, status=""}) =>
  <article className={classNames('message', {[`is-${status}`]: !!status})}>
    <div className="message-header">
      <p>{header}</p>
    </div>
    <div className="message-body">
      {body}
    </div>
  </article>


export default Message