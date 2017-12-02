import React from 'react'
import classNames from 'classnames'

import Icon from '../Utils/Icon'


const TYPE_FILE_UPLOAD = 'file_upload'
const TYPE_RECORD = 'record'


export default class ContributionForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {type: null}
  }

  render() {
    return (
      <div className="container box">
        <h3 className="title is-3">Contact</h3>
        {this.renderNameField()}
        <div className="columns">
          <div className="column is-5">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="adresse@cagou.nc"/>
                <span className="icon is-small is-left">
                  <Icon name="envelope"/>
                </span>
              </div>
            </div>
          </div>
          <div className="column is-2 has-text-centered separator">
            <h4 className="title is-4">OU</h4>
          </div>
          <div className="column is-5">
            <div className="field">
              <label className="label">Téléphone</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="00.00.00"/>
                <span className="icon is-small is-left">
                  <Icon name="phone"/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        {this.renderUploadTypeSelector()}
        {this.state.type === TYPE_FILE_UPLOAD && this.renderFileUpload()}
        <hr/>
        <div>
          <label className="checkbox is-size-5 box terms">
            <input type="checkbox"/> J'accepte <a href="#">les conditions de participation</a>
          </label>
          <button className="button is-large btn-send" disabled>
            <Icon name="paper-plane-o"/>
            <span>Envoyer</span>
          </button>
        </div>
      </div>
    )
  }

  renderNameField() {
    return (
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Prénom" required/>
              <span className="icon is-small is-left">
                <Icon name="user"/>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="email" placeholder="Nom"/>
              <span className="icon is-small is-left">
                <Icon name="user"/>
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  renderUploadTypeSelector() {
    return (
      <div className="tabs is-toggle is-fullwidth is-large">
        <ul>
          <li className={classNames({'is-active': this.state.type === TYPE_FILE_UPLOAD})}
              onClick={() => this.setState({type: TYPE_FILE_UPLOAD})}>
            <a>
              <Icon name="upload"/>
              <span>J'envoie un fichier</span>
            </a>
          </li>
          <li className={classNames({'is-active': this.state.type === TYPE_RECORD})}
              onClick={() => this.setState({type: TYPE_RECORD})}>
            <a>
              <Icon name="video-camera"/>
              <span>Je me filme directement</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  renderFileUpload() {
    return (
      <div className="field">
        <div className="file has-name is-boxed">
          <label className="file-label">
            <input className="file-input" type="file" name="video"/>
            <span className="file-cta">
              <span className="file-icon">
                <Icon name="upload"/>
              </span>
              <span className="file-label">
                Fichier vidéo (.mp4, .avi, .webm...)
              </span>
            </span>
            {/*<span className="file-name"></span>*/}
          </label>
        </div>
      </div>
    )
  }
}