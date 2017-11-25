import React from 'react'
import Icon from '../Utils/Icon'


const Button = ({children, size, iconName, className}) =>
  <a className={`button is-${size} ${className}`}>
    <Icon name={iconName} size={size}/>
    <span>{children}</span>
  </a>

const ButtonsAction = ({size="large", order=[0,1,2], className="", buttonClassName=""}) => {
  const buttons = [
    <Button className={buttonClassName} iconName="reply" size={size}>Répondre</Button>,
    <Button className={buttonClassName} iconName="eye" size={size}>Voir les réponses</Button>,
    <Button className={buttonClassName} iconName="share-alt" size={size}>Partager</Button>
  ]
  return (
    <div className={`buttons contribution-actions ${className}`}>
      {buttons[order[0]]}
      {buttons[order[1]]}
      {buttons[order[2]]}
    </div>
  )
}

export default ButtonsAction