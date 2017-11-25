import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showModal } from '../../state/modal/reducer'
import Contribution from '../Contribution/Contribution'
import ButtonsAction from '../Contribution/ButtonsAction'
import FactApprove from '../Contribution/FactApprove'
import FactRefute from '../Contribution/FactRefute'
import FactInfo from '../Contribution/FactInfo'


@connect(state => ({contributions: state.Debate.contributions}), {showModal})
export default class CategoryContributions extends React.PureComponent {
  render() {
    const category = this.props.match.params.category
    const contributions = this.props.contributions.filter(c => c.category1 === category || c.category2 === category)

    if (contributions.size === 0)
      return "Nope"
    return (
      <div className="container page-category-arguments">
        <div className="columns is-multiline">
          {contributions.map(c => (
            <div className="column is-4" key={c.id}>
              <Link to={`/contribution/${c.id}`} className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="/img/head.jpg" alt="Placeholder image"/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{c.speaker.firstName} {c.speaker.lastName}</p>
                      <p className="subtitle is-6">{c.speaker.occupation}</p>
                    </div>
                  </div>
                  <div className="content">
                    <h5 className="title is-5 has-text-centered is-marginless">“ {c.label} ”</h5>
                  </div>
                </div>
                <footer className="card-footer">
                  <Contribution content={c.content}/>
                  <div className="facts">
                    <FactApprove message="Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum."/>
                    <FactRefute message="Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum."/>
                    <FactInfo message="Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum."/>
                  </div>
                  <ButtonsAction size="medium" order={[0,2,1]}/>
                </footer>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}