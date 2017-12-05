import React from 'react'
import Helmet from 'react-helmet'

import FactCard from '../components/Fact/Card'


export default class InfoPage extends React.PureComponent {
  render() {
    const imageUrl = require(`file!../assets/facts/${this.props.pathContext.category}/${this.props.pathContext.fact.image}`)
    return (
      <div className="page-info">
        <Helmet>
          <meta property="og:description" content="Awa ? + d'infos sur etsidemain.nc"/>
          <meta property="og:image" content={imageUrl}/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="420"/>
          <meta property="og:image:height" content="420"/>
        </Helmet>
        <FactCard category={this.props.pathContext.category} fact={this.props.pathContext.fact}/>
      </div>
    )
  }
}
