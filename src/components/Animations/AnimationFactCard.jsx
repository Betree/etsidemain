import React from 'react'
import Icon from '../Utils/Icon'


export default class AnimationFactCard extends React.PureComponent {
  render() {
    return (
      <div className="card fact">
        <div className="card-image">
          <video src={this.props.video} poster={this.props.image} ref="player" autoPlay muted loop/>
        </div>
        <div className="card-footer">
          <div className="button is-medium card-footer-item">
            <Icon name="share-alt"/>
            <span>Partager</span>
          </div>
        </div>
      </div>
    )
  }
}