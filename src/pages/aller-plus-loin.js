import React from 'react'
import Link from 'gatsby-link'

import Icon from '../components/Utils/Icon'


const GoFurther = () =>
  <div className="page-go-further">
    <h1 className="title is-1 is-centered has-text-centered">Envie d'aller plus loin ?</h1>
    <div className="columns">
      <div className="column is-5 is-offset-1 has-text-centered">
        <h2 className="title is-2">
          <Icon name="info-circle"/>&nbsp;&nbsp;
          <span>Se documenter</span>
        </h2>
        <p>Quelques ressources pour comprendre le sujet en profondeur</p>
        <br/>
        <button className="button is-large">Go !</button>
      </div>
      <div className="column is-5 has-text-centered">
        <h2 className="title is-2 ">
          <Icon name="map-marker"/>&nbsp;
          <span>Se rencontrer</span>
        </h2>
        <p>Rejoignez un groupe local pour débatre ou agîr</p>
        <br/>
        <button className="button is-large">Go !</button>
      </div>
    </div>
  </div>


export default GoFurther