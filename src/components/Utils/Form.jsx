import React from 'react'
import classNames from 'classnames'

import Icon from './Icon'
import Message from './Message'


/**
 * A basic form component specialized for Bulma + Netlify.
 * Not optimized: it will re-render all fields whenever state
 * gets updated.
 */
export default class Form extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {__submitStatus: null}
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeFile = this.onChangeFile.bind(this)
    this.Input = this.Input.bind(this)
    this.TextArea = this.TextArea.bind(this)
    this.FieldWithIcon = this.FieldWithIcon.bind(this)
    this.Submit = this.Submit.bind(this)
  }

  render() {
    return (
      <form className="form"
            onSubmit={(e) => this.onSubmit(e)}
            name={this.props.name}
            netlify-honeypot="loveYouBot"
            data-netlify="true">
        <h3 className="title is-3">{this.props.title}</h3>
        {this.renderSubmitStatus()}
        {this.renderContent()}
        <div style={{display: 'none'}}>
          <input name="loveYouBot" value=""/>
        </div>
      </form>
    )
  }

  renderSubmitStatus() {
    if (this.state.__submitStatus === 'success')
      return <Message status='success'>Votre message a bien été envoyé, merci !</Message>
    else if (this.state.__submitStatus === 'error')
      return (
        <Message status='danger'>
          Une erreur est survenue. Vous pouvez réessayer ou nous contacter si l'erreur persiste
        </Message>
      )
  }

  renderContent() {
    if (this.state.__submitStatus === 'success')
      return null
    return this.props.children({
      Input: this.Input,
      TextArea: this.TextArea,
      FieldWithIcon: this.FieldWithIcon,
      Submit: this.Submit,
      values: this.getValues()
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({'__submitStatus': 'submitting'})
    const values = this.getValues()

    // Build payload
    const payload = {method: "POST"}
    /*if (this.props.isFormData) {
      payload.headers = {"Content-Type": "multipart/form-data"}
      payload.body = this.multipartFormData(values)
    } else {*/
      payload.headers ={ "Content-Type": "application/x-www-form-urlencoded" }
      payload.body = this.encode({ "form-name": this.props.name, ...values })
    //}

    // Send request
    fetch("/", payload).then(() => {
      this.setState({__submitStatus: 'success'})
    }).catch(error => {
      this.setState({__submitStatus: 'error'})
    });
    return false
  }

  multipartFormData(values) {
    console.log(values)
    var formData  = new FormData()
    Object.keys(values).forEach(key => {
      formData.append(key, values[key])
    })
    return formData
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeFile(e) {
    this.setState({[e.target.name]: e.target.files[0]})
  }

  encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  getValues() {
    const {__submitStatus, ...values} = this.state
    return values
  }

  /* ---- Fields ---- */

  Input(props) {
    const disabled = this.state.__submitStatus === 'submitting'
    if (!this.state[props.name])
      this.state[props.name] = ""
    return <input onChange={props.type === 'file' ? this.onChangeFile : this.onChange}
                  value={props.type === 'file' ? undefined : this.state[props.name]}
                  disabled={disabled}
                  {...props}/>
  }

  TextArea(props) {
    const disabled = this.state.__submitStatus === 'submitting'
    if (!this.state[props.name])
      this.state[props.name] = ""
    return <textarea onChange={this.onChange}
                     value={this.state[props.name]}
                     className="textarea"
                     disabled={disabled}
                     {...props}/>
  }

  /* ---- Helpers ---- */

  FieldWithIcon({label, iconName, ...props}) {
    return (
      <div className="field">
        <label className="label" htmlFor={props.name}>{label}</label>
        <p className="control has-icons-left has-icons-right">
          <this.Input id={props.name} className="input" {...props}/>
          <Icon name={iconName} size="small" className="is-left"/>
        </p>
      </div>
    )
  }

  Submit() {
    const props = {className: "button is-large btn-send"}
    if (this.state.__submitStatus === 'submitting') {
      props.disabled = true
      props.className = classNames(props.className, 'is-loading')
    }

    return (
      <button type="submit" {...props}>
        <Icon name="send"/>
        <span>Envoyer</span>
      </button>
    )
  }
}
