import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import Icon from '../Utils/Icon'


export default class ContactFields extends React.PureComponent {
  render() {
    const { FieldWithIcon } = this.props.formComponents

    return (
      <div className="contact-fields">
        <div className="field is-horizontal">
          <div className="field-body">
            <FieldWithIcon name="FirstName" label="Prénom" iconName="user" placeholder="Sarah" required/>
            <FieldWithIcon name="LastName" label="Nom" iconName="user" placeholder="Fraichit"/>
            <FieldWithIcon name="Location" label="Localisation (optionnel)" iconName="map-marker" placeholder="Nouméa"/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <FieldWithIcon name="Email" label="Email" iconName="envelope" placeholder="adresse@cagou.nc"/>
          </div>
          <div className="column is-2 has-text-centered separator">
            <h5 className="title is-5">ET / OU</h5>
          </div>
          <div className="column is-5">
            <FieldWithIcon name="Phone" label="Téléphone" iconName="phone" placeholder="00.00.00"/>
          </div>
        </div>
      </div>
    )
  }
}

export const validateContactFields = (fields) => {
  if (!fields.Email && !fields.Phone)
    alert("Vous devez spécifier votre email ou un numéro de téléphone")
  else
    return true
  return false
}