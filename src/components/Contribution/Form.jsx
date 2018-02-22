import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import Icon from '../Utils/Icon'
import { default as ContactFields, validateContactFields } from '../Utils/ContactFields'
import Form from '../Utils/Form'


const TYPE_FILE_UPLOAD = 'file_upload'
const TYPE_RECORD = 'record'



export default class ContributionForm extends React.PureComponent {
  render() {
    return (
      <Form name="contribution" title="Envoi d'une vidéo" validate={this.validate}>
        {formComponents =>
          <div>
            <ContactFields formComponents={formComponents}/>
            <hr/>
            <div className="field">
              <div className="file has-name is-boxed">
                <label className="file-label">
                  <label className="label" htmlFor="video-file">Fichier vidéo</label>
                  <formComponents.Uploader name="Video"/>
                </label>
              </div>
            </div>
            <hr/>
            <label className="checkbox is-size-5 box terms">
              <formComponents.CheckBox name="AcceptRulesAndTerms"/>&nbsp;
              J'accepte <Link to="/conditions" target="_BLANK">les règles et conditions de participation</Link>
            </label>
            <formComponents.Submit/>
          </div>
        }
      </Form>
    )
  }

  validate(data) {
    if (!validateContactFields(data))
      return false
    if (!data.AcceptRulesAndTerms)
      alert("Vous devez accepter les règles et conditions de participation")
    else if (!data.Video)
      alert("Sélectionnez un fichier vidéo")
    else if (data.Video === "UPLOADING")
      alert("Merci d'attendre la fin de l'envoi du fichier")
    else
      return true
    return false
  }
}

/*

      <form className="form" name="contribution" data-netlify="true">
        <h3 className="title is-3">Envoi d'une vidéo</h3>
        <ContactFields/>
        <hr/>
        <div className="field">
          <div className="file has-name is-boxed">
            <label className="file-label">
              <label className="label" htmlFor="video-file">Fichier vidéo</label>
              <input className="file-input" name="video" id="video-file" accept="video/*" type="file" name="video" required/>
              <span className="file-cta">
                <span className="file-icon">
                  <Icon name="upload"/>
                </span>
                <span className="file-label">
                  Formats: mp4, webm, 3gp, mpeg, avi...
                </span>
              </span>
              {<span className="file-name"></span>}
              </label>
              </div>
            </div>
            <hr/>

          </form>
*/