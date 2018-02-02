import React from 'react'


const SpeakerPicture = ({size="48", picture, firstName, lastName}) =>
  <figure className={`speaker-picture image is-${size}x${size}`}>
    <img src={picture} alt={`${firstName} ${lastName}`}/>
  </figure>

export default SpeakerPicture