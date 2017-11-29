import React from 'react'


const SpeakerPicture = ({size="48", picture}) =>
  <figure className={`speaker-picture image is-${size}x${size}`}>
    <img src={picture} alt=""/>
  </figure>

export default SpeakerPicture