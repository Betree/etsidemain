import React from 'react'

import Message from '../components/Utils/Message'
import { default as ContactFields, validateContactFields } from '../components/Utils/ContactFields'
import Form from '../components/Utils/Form'
import { FacebookLink, MailTo } from '../components/Contact'


const About = () =>
  <div className="page-about">
    <h1 className="title is-1 is-centered has-text-centered">A Propos</h1>
    <div className="container">
      <Message>
        <p className="is-size-4">
          <strong>Et si demain...</strong> est un collectif ouvert et
          indépendant qui s'associe avec des médias partenaires dans le but d'allier participation
          citoyenne et travail journalistique. Toutes les personnes et entités impliquées dans le projet
          doivent respecter <strong><a href="https://docs.google.com/document/d/1a209ElQnmL6gM9KQI6bjxDlBLT48BtETn_5VGqI7BJY/edit#">notre cadre de confiance</a></strong> ainsi
          que les dix devoirs de la <strong><a href="https://fr.wikipedia.org/wiki/Charte_de_Munich">charte de Munich</a></strong>.
          <br/><br/>
          Le projet est né lors du premier Hackathon de Nouvelle-Calédonie (novembre 2017) organisé 
          par <a href="http://www.observatoire-numerique.nc">l'observatoire du numérique</a> où il
          a remporté le prix "Coup de cœur du jury".
          Il est le fruit d'un travail commun entre Falai Huedro (journaliste @ Caledonia),
          Blandine Guillet (rédactrice en chef @ Caledonia),
          Clémentine Prévot (motion designer) et Benjamin Piouffle (développeur) avec le soutien de la
          chaîne <a href="http://caledonia.nc/">Caledonia</a>.
          <br/><br/>
          L'ensemble du code est <a href="https://github.com/Betree/etsidemain">publié</a> sous licence <strong>open-source</strong> (AGPL3).
          Vous pouvez l'utiliser, le modifier et le partager librement.
          <br/><br/>
          Vous pouvez nous contacter sur <MailTo/>, 
          par message privé sur <FacebookLink/> ou via le formulaire ci-dessous.
        </p>
      </Message>
      <hr/>
      <div className="box">
        <Form name="contact" title="Contact" validate={validateContactFields}>
          {formComponents => 
            <div>
              <ContactFields formComponents={formComponents}/>
              <hr/>
              <label className="label" htmlFor="Message">Message</label>
              <formComponents.TextArea id="Message" name="Message" placeholder="Merci !" required/>
              <hr/>
              <formComponents.Submit/>
            </div>
          }
        </Form>
      </div>
    </div>
  </div>


export default About
