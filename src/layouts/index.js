import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { SITE_URL } from '../lib/constants'
import NavBar from '../components/NavBar'

import '../styles/main.sass'


const META_DESCRIPTION = "Et si demain la Calédonie... était indépendante ? Restait dans la France ? Qu'auriez-vous à dire sur le sujet ?"


class TemplateWrapper extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="fr"/>
          <title>Et si demain...</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/manifest.json"/>
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
          <meta name="theme-color" content="#4497AE"/>
          <meta name="description" content={META_DESCRIPTION}/>
          <meta property="og:locale" content="fr_FR"/>
          <meta property="og:title" content="Et si demain..."/>
          <meta property="og:description" content={META_DESCRIPTION}/>
          <meta property="fb:app_id" content="166652520772209"/>
          <meta property="og:image" content={`${SITE_URL}/banner.jpg`}/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
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
