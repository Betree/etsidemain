import React from 'react'


export const youtubeRegex =
  /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/


const Contribution = ({content}) => {
  // Show video player
  if (youtubeRegex.exec(content))
    return (
      <p className="image is-16by9">
        <img src="https://bulma.io/images/placeholders/640x360.png" alt=""/>
      </p>
    )
  // Show text
  return content
}

export default Contribution