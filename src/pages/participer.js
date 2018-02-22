import React from 'react'
import Link from 'gatsby-link'

import Rules from '../components/Contribution/Rules'
import Message from '../components/Utils/Message'
import ContributionForm from '../components/Contribution/Form'
import Icon from '../components/Utils/Icon'


// Configure uploader (only support globals for locale) 
global.UPLOADCARE_PUBLIC_KEY = "44fb506cd37a77f15868"
global.UPLOADCARE_PREVIEW_STEP = true
global.UPLOADCARE_TABS = "camera file facebook gdrive instagram"
global.UPLOADCARE_INPUT_ACCEPT_TYPES = "video/*"
global.UPLOADCARE_LOCALE = 'fr'

export default class Participate extends React.PureComponent {
  render() {
    return (
      <div className="page-participate">
        <h1 className="title is-1 is-centered has-text-centered">Participez !</h1>
        <div className="container box">
          <h3 className="title is-3">Règles</h3>
          <div className="content is-size-5"><Rules/></div>
          <hr/>
          <Message status="info" header="Vous pouvez nous envoyer vos vidéos...">
            <ul style={{listStyle: 'inside'}}>
              <li>
                Par message privé sur <a className="has-text-weight-bold" target="_BLANK" href="https://www.facebook.com/etsidemain.nc/">Facebook</a>
              </li>
              <li>
                Par email sur <a className="has-text-weight-bold" href="mailto:contact@etsidemain.nc">contact@etsidemain.nc</a>
              </li>
              <li>
                En utilisant le formulaire ci-dessous...
              </li>
            </ul>
          </Message>
        </div>
        <div className="container box">
          <ContributionForm/>
        </div>
      </div>
    )
  }
}