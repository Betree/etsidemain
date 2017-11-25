import React from 'react'
import Message from '../Utils/Message'


const FactInfo = ({message}) =>
  (message && <Message status="info" header="On vous en dit +" body={message}/>) || null

export default FactInfo