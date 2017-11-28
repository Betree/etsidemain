import React from 'react'
import Icon from '../Utils/Icon'


export default class AnimationFactCard extends React.PureComponent {
  render() {
    return (
      <div className="card fact">
        <div className="card-image">
          <video src={`/animations/facts/${this.props.fact}.mp4`} ref="player" autoPlay muted loop
                 poster={`/animations/facts/${this.props.fact}.jpg`}
          />
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