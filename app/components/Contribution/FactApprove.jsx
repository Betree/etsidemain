import React from 'react'
import Message from '../Utils/Message'


const FactApprove = ({message}) =>
  (message && <Message status="success" header="C'est pas faux!" body={message}/>) || null

export default FactApprove