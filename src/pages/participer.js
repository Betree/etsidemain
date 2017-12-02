import React from 'react'

import ContributionForm from '../components/Contribution/Form'


export default class Participate extends React.PureComponent {
  render() {
    return (
      <div className="page-participate">
        <h1 className="title is-1 is-centered has-text-centered">Participez !</h1>
        <ContributionForm/>
      </div>
    )
  }
}