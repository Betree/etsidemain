import React from 'react'
import Helmet from 'react-helmet'

import Icon from '../components/Utils/Icon'
import Message from '../components/Utils/Message'
import Rules from '../components/Contribution/Rules'


const Conditions = () =>
  <div className="page-conditions">
    <Helmet>
      <meta property="og:description" content="Règles de participation et conditions d'utilisation"/>
    </Helmet>
    <h1 className="title is-1 is-centered has-text-centered">Conditions de participation</h1>
    <Message className="content">
      <p>
        Vous soumettez vos vidéos sous une
        licence <a target="_BLANK" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr">Creative Commons Attribution -
        Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International (CC BY-NC-SA 4.0)</a> qui
        permet la libre utilisation du contenu envoyé par toute partie sous respect des conditions de la dite license.
        <br/><br/>
        Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès 
        et de rectification aux informations qui vous concernent. Vous pouvez accéder à ces informations par simple mail 
        à <a href="mailto:contact@etsidemain.nc">contact@etsidemain.nc</a>.
        Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
        <br/><br/>
        Pour en savoir plus sur vos droits, consultez le site de la CNIL :&nbsp;
        <a href="https://www.cnil.fr/comprendre-vos-droitsconsultez">https://www.cnil.fr/comprendre-vos-droitsconsultez</a>
      </p>
    </Message>
  </div>


export default Conditions