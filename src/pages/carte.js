import React from 'react'
import Helmet from 'react-helmet'

import Graph from '../components/Graph'


const Carte = ({data: {dataJson: {Categories, Contributions}}}) => {
  Contributions = Contributions.map(c => {
    c.SpeakerPicture = require(`../assets/speakers/${c.id}.jpg`)
    return c
  })
  return (
    <div>
      <Helmet>
        <meta property="og:description" content="La carte du débat pour 2018"/>
      </Helmet>
      <Graph categories={Categories} contributions={Contributions}/>
    </div>
  )
}


export const query = graphql`
query ContribsAndCategories {
	dataJson {
    Categories
    Contributions {
      id,
      FirstName,
      LastName,
      Occupation,
      Title,
      Category1,
      Category2,
      Content,
      Confirm,
      Refute,
      Info,
      ReplyTo
    }
  }
}
`

export default Carte