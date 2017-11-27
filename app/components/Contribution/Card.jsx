import React from 'react'

import ContributionContent from './Content'
import ButtonsAction from './ButtonsAction'
import { FactInfo, FactRefute, FactConfirm } from './Fact'
import SpeakerPicture from './SpeakerPicture'


const Card = ({contribution}) => (
  <div className="card contribution">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <SpeakerPicture picture={contribution.speaker.picture}/>
        </div>
        <div className="media-content">
          <p className="title is-4">{contribution.speaker.firstName} {contribution.speaker.lastName}</p>
          <p className="subtitle is-6">{contribution.speaker.occupation}</p>
        </div>
      </div>
      <div className="content">
        <h5 className="title is-5 has-text-centered is-marginless">“ {contribution.label} ”</h5>
      </div>
      <ContributionContent contribution={contribution}/>
      <div className="facts">
        <div className="columns is-gapless">
          {contribution.confirm && <div className="column">
            <FactConfirm message={contribution.confirm}/>
          </div>}
          {contribution.confirm && contribution.refute && <div className="column separator"/> }
          {contribution.refute && <div className="column">
            <FactRefute message={contribution.refute}/>
          </div>}
        </div>
        <FactInfo message={contribution.info}/>
      </div>
    </div>
    <ButtonsAction className="card-footer" buttonClassName="card-footer-item" size="medium" order={[0,2,1]}/>
  </div>
)

export default Card