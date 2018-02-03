import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import Icon from '../Utils/Icon'
import ContactFields from '../Utils/ContactFields'


const TYPE_FILE_UPLOAD = 'file_upload'
const TYPE_RECORD = 'record'



export default class ContributionForm extends React.PureComponent {
  render() {
    return (
      <form className="form" name="contribution" netlify>
        <h3 className="title is-3">Envoi d'une vidéo</h3>
        <ContactFields/>
        <hr/>
        <div className="field">
          <div className="file has-name is-boxed">
            <label className="file-label">
              <label className="label" for="video-file">Fichier vidéo</label>
              <input className="file-input" name="video" id="video-file" accept="video/*" type="file" name="video" required/>
              <span className="file-cta">
                <span className="file-icon">
                  <Icon name="upload"/>
                </span>
                <span className="file-label">
                  Formats: mp4, webm, 3gp, mpeg, avi...
                </span>
              </span>
              {/*<span className="file-name"></span>*/}
            </label>
          </div>
        </div>
        <hr/>
        <label className="checkbox is-size-5 box terms">
          <input type="checkbox"/> J'accepte <Link to="/conditions" target="_BLANK">les règles et conditions de participation</Link>
        </label>
        <button type="submit" className="button is-large btn-send">
          <Icon name="send"/>
          <span>Envoyer</span>
        </button>
      </form>
    )
  }
}