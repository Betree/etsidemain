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

const linkRenderer = props =>
  <a href={props.href} target="_BLANK">
    <Icon name="external-link"/>
    <span>
      {typeof props.children[0] === 'string' ? getDisplayableHostname(props.children[0]) : props.children}
    </span>
  </a>

const getDisplayableHostname = url =>
  url.replace(/^https?:\/\//i, "").replace(/\/.*/g, "")

export const FactConfirm = ({message}) =>
  <Fact status="success" header={<div><Icon name="thumbs-up"/><span>C'est pas faux !</span></div>} message={message}/>

export const FactRefute = ({message}) =>
  <Fact status="warning" header={<div><Icon name="hand-o-up"/><span>Mais...</span></div>} message={message}/>

export const FactInfo = ({message}) =>
  <Fact status="info" header={<div><Icon name="info-circle"/><span>On vous en dit +</span></div>} message={message}/>


