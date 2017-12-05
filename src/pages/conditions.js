import React from 'react'
import Helmet from 'react-helmet'

import Icon from '../components/Utils/Icon'
import Rules from '../components/Contribution/Rules'


const Conditions = () =>
  <div className="container is-size-5" style={{paddingTop: '1em'}}>
    <Helmet>
      <meta property="og:description" content="Règles de participation et conditions d'utilisation"/>
    </Helmet>
    <div className="content box">
      <h1>Règles</h1>
      <Rules/>
      <h1>Légal</h1>
      <p>
        Vous soumettez vos vidéos sous une licence&nbsp;
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</a>,
        qui permet à des professeurs ou à des associations de réexploiter librement le contenu envoyé.
        <br/><br/>
        Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès 
        et de rectification aux informations qui vous concernent. Vous pouvez accéder à ces informations par simple mail 
        à etsidemain.nc@gmail.com. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des 
        données vous concernant.
        <br/><br/>
        Pour en savoir plus sur vos droits, consultez le site de la CNIL:&nbsp;
        <a href="https://www.cnil.fr/comprendre-vos-droitsconsultez">https://www.cnil.fr/comprendre-vos-droitsconsultez</a>
      </p>
    </div>
  </div>


export default Conditions