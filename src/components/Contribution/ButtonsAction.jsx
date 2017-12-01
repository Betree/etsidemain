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
    <div className={className}>
      <div className="columns is-multiline is-gapless is-mobile">
        <div className="column">{buttons[order[0]]}</div>
        <div className="column">{buttons[order[1]]}</div>
        <div className="column">{buttons[order[2]]}</div>
      </div>
    </div>
  )
}

export default ButtonsAction