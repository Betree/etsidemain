import React from 'react'

import Message from '../Utils/Message'
import LinkToCategory from './LinkToCategory'


const OtherCategoryArguments = ({category}) =>
  <LinkToCategory category={category} className="message-link">
    <Message status="info">
      Viens regarder les arguments de la catégorie <strong>{category}</strong> !
    </Message>
  </LinkToCategory>

  export default OtherCategoryArguments