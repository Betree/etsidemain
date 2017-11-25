import React from 'react'
import Icon from '../Utils/Icon'


const Button = ({children, size, iconName}) =>
  <span className={`button is-${size} is-link`}>
    <Icon name={iconName} size={size}/>
    <span>{children}</span>
  </span>

const ButtonsAction = ({size="large", order=[0,1,2]}) => {
  const buttons = [
    <Button iconName="reply" size={size}>Répondre</Button>,
    <Button iconName="eye" size={size}>Voir les réponses</Button>,
    <Button iconName="share-alt" size={size}>Partager</Button>
  ]
  return (
    <div className="buttons contribution-actions">
      {buttons[order[0]]}
      {buttons[order[1]]}
      {buttons[order[2]]}
    </div>
  )
}

export default ButtonsAction