import React from 'react'


export default class Meetup extends React.PureComponent {
  render() {
    return (
      <nav className="panel">
        <p className="panel-tabs">
          <a>Associations</a>
        </p>
        <a target="_BLANK" className="panel-block" href="https://www.facebook.com/pg/Decouvretoncaillou">
          <span className="panel-icon">
            <i className='icon-map-marker'/>
          </span>
          Nouméa - Découvre ton caillou
        </a> 
    </nav>
    )
  }
}

