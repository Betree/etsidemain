import React from 'react'
import Link from 'gatsby-link'

import Icon from '../Utils/Icon'


const PopupNav = (({closeModal}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 800
  return (
    <div className="modal-card start-visit-popup-card">
      <section className="modal-card-body">
        <h2 className="has-text-centered title is-4">Je découvre les arguments...</h2>
        <div className="columns">
          <Button onClick={closeModal} url="/categories" iconName="tags" label="Par catégorie"/>
          <Button onClick={closeModal} url="/au-hasard" iconName="random" label="Au hasard"/>
          {isMobile === false && <Button onClick={closeModal} url="/carte" iconName="line-chart" label="En mode expert"/>}
        </div>
      </section>
    </div>
  )
})

const Button = (({label, iconName, url, ...linkProps}) =>
  <p className="control column has-text-centered">
    <Link to={url} className="button is-large is-info" {...linkProps}>
      <Icon name={iconName}/>
      <span>{label}</span>
    </Link>
  </p>
)

export default PopupNav