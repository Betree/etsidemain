import React from 'react'
import Link from 'gatsby-link'

import Rules from '../components/Contribution/Rules'
import Message from '../components/Utils/Message'
import ContributionForm from '../components/Contribution/Form'
import Icon from '../components/Utils/Icon'
import { FacebookLink, MailTo } from '../components/Contact'


// Configure uploader (only support globals for locale) 

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
                Par message privé sur <FacebookLink className="has-text-weight-bold"/>
              </li>
              <li>
                Par email sur <MailTo className="has-text-weight-bold"/>
              </li>
              <li>
                En utilisant <a className="has-text-weight-bold" target="_BLANK" href="https://www.dropbox.com/request/AtceEBJYVuSNg9VygFO0">le formulaire d'envoi publique</a>
              </li>
              {
                // <li>
                //   En utilisant le formulaire ci-dessous...
                // </li>
              }
            </ul>
          </Message>
        </div>
        {/*
        <div className="container box">
          <ContributionForm/>
        </div>
        */}
      </div>
    )
  }
}