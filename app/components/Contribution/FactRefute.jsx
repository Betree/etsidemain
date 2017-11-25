import React from 'react'
import Message from '../Utils/Message'


const FactRefute = ({message}) =>
  (message && <Message status="danger" header="Mouais..." body={message}/>) || null

export default FactRefute