import React from 'react'
import Graph from '../components/Graph'


const Carte = ({data: {dataJson: {Categories, Contributions}}}) => {
  Contributions = Contributions.map(c => {
    c.SpeakerPicture = require(`../assets/speakers/${c.id}.jpg`)
    return c
  })
  return <Graph categories={Categories} contributions={Contributions}/>
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