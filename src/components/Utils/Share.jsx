import React from 'react'
import classNames from 'classnames'

import Icon from '../Utils/Icon'


export default class Share extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {urlCopied: false}
  }

  render() {
    const { url, message="", hashTags } = this.props
    const encodedUrl = encodeURIComponent(url)

    return (
      <div className="share">
      <div className="field has-addons">
        <div className="control" style={{flexGrow: 1}}>
          <input className="input is-large" type="text" value={url} ref="urlInput" readOnly/>
        </div>
        <div className="control">
          <a  className={classNames("button is-large", {'is-success': this.state.urlCopied})}
              onClick={() => this.copyUrlToClipboard()}>
            <Icon name="clipboard"/>
            <span>{this.state.urlCopied ? 'Copiée !' : 'Copier'}</span>
          </a>
        </div>
      </div>
      <hr/>
      <div className="has-text-centered">
        <ShareButton url={twitterLink(encodedUrl, message, hashTags)} iconName="twitter" title="Twitter"/>
        <ShareButton url={facebookLink(encodedUrl, message, hashTags)} iconName="facebook" title="Facebook"/>
        <ShareButton url={mailLink(encodedUrl, message, hashTags)} iconName="envelope" title="Mail"/>
      </div>
    </div>
    )
  }

  copyUrlToClipboard() {
    this.refs.urlInput.select()
    let success = false
    try {success = document.execCommand('copy')} catch (err) {}
    if (success)
    this.setState({urlCopied: true})
  }
}

const ShareButton = ({url, iconName, title}) =>
  <a href={url} target="_BLANK" className="button share-button is-large is-size-1" title={title}>
    <Icon name={iconName} withContainer={false}/>
  </a>

function twitterLink(url, message, hashTags) {
  return `https://twitter.com/intent/tweet?url=${url}&text=${message}&hashtags=${hashTags.toString()}`
}

function facebookLink(url, message, hashTags) {
  // Doesn't work with localhost
  return `https://www.facebook.com/dialog/share?app_id=166652520772209&display=page&href=${url}&hashtag=${hashTags[0]}&quote=${encodeURI(message)}`
}

function mailLink(url, message) {
  return `mailto:?subject=${message}&body=${url}`
}
