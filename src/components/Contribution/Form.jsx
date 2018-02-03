import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import Icon from '../Utils/Icon'
import ContactFields from '../Utils/ContactFields'
import Form from '../Utils/Form'


const TYPE_FILE_UPLOAD = 'file_upload'
const TYPE_RECORD = 'record'



export default class ContributionForm extends React.PureComponent {
  render() {
    return (
      <Form name="contribution" title="Envoi d'une vidéo" isFormData={true}>
        {formComponents =>
          <div>
            <ContactFields formComponents={formComponents}/>
            <hr/>
            <div className="field">
              <div className="file has-name is-boxed">
                <label className="file-label">
                  <label className="label" htmlFor="video-file">Fichier vidéo</label>
                  <formComponents.Input className="file-input" accept="video/*" type="file" name="video" required/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <Icon name="upload"/>
                    </span>
                    <span className="file-label">
                      Formats: mp4, 3gp, avi...
                    </span>
                  </span>
                  {this.renderVideoFilePath(formComponents)}
                </label>
              </div>
            </div>
            <hr/>
            <label className="checkbox is-size-5 box terms">
              <formComponents.Input type="checkbox" name="AcceptRulesAndTerms"/>&nbsp;
              J'accepte <Link to="/conditions" target="_BLANK">les règles et conditions de participation</Link>
            </label>
            <formComponents.Submit/>
          </div>
        }
      </Form>
    )
  }

  renderVideoFilePath(formData) {
    if (!formData.values || !formData.values.video)
      return null
    return <span className="file-name">{formData.values.video.name}</span>
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