import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import Icon from '../Utils/Icon'


export default class ContactFields extends React.PureComponent {
  render() {
    return (
      <div className="contact-fields">
        {this.renderIdentityField()}
        <div className="columns">
          <div className="column is-5">
            <div className="field">
              <label className="label" for="email">Email</label>
              <p className="control has-icons-left has-icons-right">
                <input className="input" name="email" id="email" type="email" placeholder="adresse@cagou.nc"/>
                <Icon name="envelope" size="small" className="is-left"/>
              </p>
            </div>
          </div>
          <div className="column is-2 has-text-centered separator">
            <h5 className="title is-5">ET / OU</h5>
          </div>
          <div className="column is-5">
            <div className="field">
              <label className="label" for="phone">Téléphone</label>
              <p className="control has-icons-left has-icons-right">
                <input className="input" name="phone" id="phone" type="text" placeholder="00.00.00"/>
                <Icon name="phone" size="small" className="is-left"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderIdentityField() {
    return (
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label" for="FirstName">Prénom</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" id="FirstName" name="FirstName" type="text" placeholder="Sarah" required/>
              <Icon name="user" size="small" className="is-left"/>
            </p>
          </div>
          <div className="field">
            <label className="label" for="LastName">Nom</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" id="LastName" name="LastName" type="email" placeholder="Fraichit"/>
              <Icon name="user" size="small" className="is-left"/>
            </p>
          </div>
          <div className="field">
            <label className="label" for="Location">Localisation (optionnel)</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" id="Location" name="Location" type="text" placeholder="Nouméa"/>
              <Icon name="map-marker" size="small" className="is-left"/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}