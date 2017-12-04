import React from 'react'

import ContributionForm from '../components/Contribution/Form'
import Rules from '../components/Contribution/Rules'
import Message from '../components/Utils/Message'
import Icon from '../components/Utils/Icon'


export default class Participate extends React.PureComponent {
  render() {
    return (
      <div className="page-participate">
        <h1 className="title is-1 is-centered has-text-centered">Participez !</h1>
        <div className="container box">
          <h3 className="title is-3">Règles</h3>
          <div className="content is-size-5"><Rules/></div>
          <hr/>
          {/* TODO <ContributionForm/>*/}
          <Message status="info" header="Pour envoyer vos vidéos" className="is-size-5">
            Le formulaire pour pouvoir vous filmer et envoyer vos vidéos directement depuis
            cette page arrive bientôt. En attendant vous pouvez nous les envoyer:
            <ul style={{listStyle: 'inside'}}>
              <li>
                Par <a className="has-text-weight-bold" target="_BLANK" href="https://www.facebook.com/pg/Et-si-demain-933594156792342">Facebook</a>
              </li>
              <li>
                Par email sur <a className="has-text-weight-bold" href="mailto:contact@etsidemain.nc">contact@etsidemain.nc</a>
              </li>
            </ul>
          </Message>
        </div>
      </div>
    )
  }
}