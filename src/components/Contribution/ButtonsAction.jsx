import React from 'react'
import Link from 'gatsby-link'

import Icon from '../Utils/Icon'


// TODO set replyingTo when replying

const ButtonsAction = ({size="large", className="", buttonClassName=""}) => {
  return (
    <div className={className}>
      <div className="columns is-multiline is-gapless is-mobile">
        <Link to="/participer" className={`button is-${size} ${buttonClassName}`}>
          <Icon name="reply" size={size}/>
          <span>Répondre</span>
        </Link>
        <a className={`button is-${size} ${buttonClassName}`}>
          <Icon name="share-alt" size={size}/>
          <span>Partager</span>
        </a>
      </div>
    </div>
  )
}

export default ButtonsAction