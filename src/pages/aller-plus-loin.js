import React from 'react'
import UsefulResources from '../components/About/UsefulResources'
import Meetup from '../components/About/Meetup'

import Icon from '../components/Utils/Icon'
import Message from '../components/Utils/Message'


const GoFurther = ({data: {dataJson: {Resources, ResourcesTypes}}}) =>
  <div className="page-go-further">
    <h1 className="title is-1 is-centered has-text-centered">Envie d'aller plus loin ?</h1>
    <div className="columns is-desktop is-multiline">
      <div className="column is-5-desktop is-10-tablet is-offset-1 has-text-centered">
        <h2 className="title is-2">
          <Icon name="info-circle"/>&nbsp;&nbsp;
          <span>Se documenter</span>
        </h2>
        <UsefulResources resources={Resources} types={ResourcesTypes}/>
      </div>
      <div className="column is-5-desktop is-10-tablet has-text-centered">
        <h2 className="title is-2 ">
          <Icon name="map-marker"/>&nbsp;
          <span>Se rencontrer</span>
        </h2>
        <Meetup/>
      </div>
      <div className="column is-6 is-offset-3">
        <Message status="info" style={{textAlign: 'center'}}>
          Envoyez nous vos liens et vos évenements sur <a href="mailto:contact@etsidemain.nc">contact@etsidemain.nc</a> ou 
          par message privé sur <a href="https://www.facebook.com/pg/Et-si-demain-933594156792342">Facebook</a>
        </Message>
      </div>
    </div>
  </div>


export default GoFurther

export const pageQuery = graphql`
  query UsefulResources {
    dataJson {
      Resources {
        Title
        URL
        Type
      }
      ResourcesTypes
    }
  }
`;