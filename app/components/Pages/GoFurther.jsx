import React from 'react'
import Icon from '../Utils/Icon'


const GoFurther = () =>
  <div className="page-go-further">
    <h1 className="title is-1 is-centered has-text-centered">Envie d'aller plus loin ?</h1>
    <div className="columns">
      <div className="column is-5 is-offset-1 has-text-centered">
        <h2 className="title is-2">
          <Icon name="comment"/>&nbsp;&nbsp;
          <span>Interpeller</span>
        </h2>
        <p>Interpellez vos élus sur des sujets qui vous tiennent à &nbsp;<Icon name="heart"/></p>
        <br/>
        <button className="button is-large">Go !</button>
      </div>
      <div className="column is-5 has-text-centered">
        <h2 className="title is-2 ">
          <Icon name="map-marker"/>&nbsp;
          <span>Se rencontrer</span>
        </h2>
        <p>Rejoignez l'un des débats organisés par une association prêt de chez vous</p>
        <br/>
        <button className="button is-large">Go !</button>
      </div>
    </div>
  </div>


export default GoFurther