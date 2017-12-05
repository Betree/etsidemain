import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { default as ContributionCard } from '../components/Contribution/Card'


export default class ContributionPage extends React.PureComponent {
  constructor(props) {
    props.pathContext.contribution.SpeakerPicture = require(`../assets/speakers/${props.pathContext.contribution.id}.jpg`)
    super(props)
  }

  render() {
    const contrib = this.props.pathContext.contribution
    return (
      <div className="page-contribution">
        {/*TODO Voir les autres arguments de la catégorie...*/}
        <Helmet>
          <meta property="og:description" content={`${contrib.FirstName} ${contrib.LastName} - "${contrib.Title}"`}/>
          <meta property="og:image" content="/static/banner.jpg"/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
        </Helmet>
        <div className="container">
          <ContributionCard contribution={contrib}/>
        </div>
      </div>
    )
  }

  getBannerMeta() {
    const meta = {image: "/static/banner.jpg", type: "image/jpeg", width: "1200", height: "630"}
    // TODO Get youtube id and if not null fill meta with good params
    return [
      <meta property="og:image" content={meta.image}/>,
      <meta property="og:image:type" content={meta.type}/>,
      <meta property="og:image:width" content={meta.width}/>,
      <meta property="og:image:height" content={meta.height}/>
    ]
  }
}
