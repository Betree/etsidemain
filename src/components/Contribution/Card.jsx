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
          <SpeakerPicture picture={contribution.SpeakerPicture}
                          firstName={contribution.FirstName} lastName={contribution.LastName}/>
        </div>
        <div className="media-content">
          <p className="title is-4">{contribution.FirstName} {contribution.LastName}</p>
          <p className="subtitle is-6">{contribution.Occupation}</p>
        </div>
      </div>
      <div className="content">
        <h5 className="title is-5 has-text-centered is-marginless">“ {contribution.Title} ”</h5>
      </div>
      <ContributionContent contribution={contribution}/>
      <div className="facts">
        <div className="columns is-gapless">
          {contribution.Confirm && <div className="column">
            <FactConfirm message={contribution.Confirm}/>
          </div>}
          {contribution.Confirm && contribution.Refute && <div className="column separator"/> }
          {contribution.Refute && <div className="column">
            <FactRefute message={contribution.Refute}/>
          </div>}
        </div>
        <FactInfo message={contribution.Info}/>
      </div>
    </div>
    <ButtonsAction className="card-footer" buttonClassName="card-footer-item" size="medium" contribution={contribution}/>
  </div>
)

export default Card