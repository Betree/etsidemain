import React from 'react'
import uploadcare from 'uploadcare-widget'


class FileUploader extends React.Component {
  componentDidMount() {
    const widget = uploadcare.Widget(this.uploader, {
      publicKey: "44fb506cd37a77f15868",
      previewStep: true,
      tabs: "file facebook gdrive instagram",
      inputAcceptTypes: "video/*"
    })
    const {value, onChange, onUploadComplete} = this.props

    if (typeof value !== 'undefined')
      widget.value(value)

    if (typeof onChange === 'function')
      widget.onChange(onChange)

    if (typeof onUploadComplete === 'function')
      widget.onUploadComplete(onUploadComplete)
  }

  getInputAttributes() {
    const attributes = Object.assign({}, this.props)

    delete attributes.value
    delete attributes.onChange
    delete attributes.onUploadComplete
    delete attributes.Input

    return attributes
  }

  render() {
    const attributes = this.getInputAttributes()
    return <input type='hidden' ref={input => this.uploader = input} {...attributes} />
  }
}

export default FileUploader