import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import NavBar from '../components/NavBar'
import Modal from '../components/Modal'

import '../styles/main.sass'

import { fetchData, fetchFacts } from '../state/debate/effects'


@connect(
  state => ({isLoading: state.Debate.isLoadingFacts || state.Debate.isLoadingContributions}),
  {fetchData, fetchFacts}
)
class TemplateWrapper extends React.PureComponent {
  componentDidMount() {
    // TODO This should not append here. Move that to GraphQL and query from components
    //this.props.fetchData()
    this.props.fetchFacts()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Et si demain</title>
          <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300" rel="stylesheet"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/manifest.json"/>
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
          <meta name="theme-color" content="#4497AE"/>
        </Helmet>
        <Modal/>
        <NavBar />
        {this.props.children()}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
