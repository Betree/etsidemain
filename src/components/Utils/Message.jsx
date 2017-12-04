import React from 'react'
import classNames from 'classnames'


const Message = ({header=null, children, status="", className=""}) =>
  <article className={classNames('message', className, {[`is-${status}`]: !!status})}>
    {header !== null &&
      <div className="message-header">
        <div>{header}</div>
      </div>
    }
    <div className="message-body">
      {children}
    </div>
  </article>


export default Message