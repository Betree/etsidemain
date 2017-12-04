import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'

import '../styles/main.sass'


class TemplateWrapper extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Et si demain</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/manifest.json"/>
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
          <meta name="theme-color" content="#4497AE"/>
        </Helmet>
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
