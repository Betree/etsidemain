import React from 'react'
import Animation from './Animation'
import Icon from '../Utils/Icon'


export default class AnimationFactCard extends React.PureComponent {
  render() {
    return (
      <div className="card fact">
        <div className="card-image">
          <Animation src={`/animations/facts/${this.props.fact}`}/>
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