import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { default as ContributionCard } from '../components/Contribution/Card'
import { youtubeThumbnail, youtubeId } from '../lib/url_utils';


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
          <meta property="og:description" content={`"${contrib.Title}" - Un argument choc 👊 par ${contrib.FirstName} ${contrib.LastName}`}/>
          {this.getBannerMeta()}
        </Helmet>
        <div className="container">
          <ContributionCard contribution={contrib}/>
        </div>
      </div>
    )
  }

  getBannerMeta() {
    let meta = {image: "/static/banner.jpg", type: "image/jpeg", width: "1200", height: "630"}
    // TODO Get youtube id and if not null fill meta with good params
    const videoId = youtubeId(this.props.pathContext.contribution.Content)
    if (videoId) {
      meta.image = youtubeThumbnail(videoId)
      meta.width = "640"
      meta.height = "480"
    }
      
    return [
      <meta key="img" property="og:image" content={meta.image}/>,
      <meta key="imgType" property="og:image:type" content={meta.type}/>,
      <meta key="imgWith" property="og:image:width" content={meta.width}/>,
      <meta key="imgHeight" property="og:image:height" content={meta.height}/>
    ]
  }
}
