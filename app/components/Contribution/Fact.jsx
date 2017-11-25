import React from 'react'
import Message from '../Utils/Message'
import { default as Markdown } from 'react-markdown'
import Icon from '../Utils/Icon'


const Fact = ({message, status, header}) => {
  if (!message)
    return null
  return <Message status={status} header={header} body={
    <Markdown source={message} renderers={{link: linkRenderer}}/>
  }/>
}

const linkRenderer = props => console.log(props) ||
  <a href={props.href} target="_BLANK">
    <Icon name="external-link"/>
    <span>
      {typeof props.children[0] === 'string' ? getDisplayableHostname(props.children[0]) : props.children}
    </span>
  </a>

const getDisplayableHostname = url =>
  url.replace(/^https?:\/\//i, "").replace(/\/.*/g, "")

export const FactConfirm = ({message}) =>
  <Fact status="success" header="C'est pas faux!" message={message}/>

export const FactRefute = ({message}) =>
  <Fact status="warning" header="Mouais..." message={message}/>

export const FactInfo = ({message}) =>
  <Fact status="info" header="On vous en dit +" message={message}/>