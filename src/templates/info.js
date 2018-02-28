import React from 'react'
import Helmet from 'react-helmet'

import { SITE_URL } from '../lib/constants'
import FactCard from '../components/Fact/Card'
import OtherCategoryArguments from '../components/Categories/OtherCategoryArguments'


export default class InfoPage extends React.PureComponent {
  render() {
    const {category, fact} = this.props.pathContext
    const imagePath = require(`../assets/facts/${category}/${fact.image}`)

    return (
      <div className="page-info">
        <Helmet>
          <meta property="og:description" content="Awa ? + d'infos sur etsidemain.nc"/>
          <meta property="og:image" content={imagePath}/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="420"/>
          <meta property="og:image:height" content="420"/>
        </Helmet>
        <OtherCategoryArguments category={category}/>
        <FactCard category={category} fact={fact}/>
      </div>
    )
  }
}
