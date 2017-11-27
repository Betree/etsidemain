import React from "react"


export class LoadingFrame extends React.PureComponent {
  render() {
    return (
      <div className="loading-frame">
        <h2 className="title">
          {this.props.withLabel && <span>Chargement</span>}
          <div className="spinner">
            <div className="bounce1"/>
            <div className="bounce2"/>
            <div className="bounce3"/>
          </div>
        </h2>
      </div>
    )
  }
}
