import React from 'react'
import Link from 'gatsby-link'


const Rules = () =>
  <div>
    <ul>
      <li><strong>Un seul argument</strong> par vidéo. Si vous avez plusieurs arguments, envoyez plusieurs vidéos</li>
      <li><strong>30 secondes</strong> maximum par vidéo</li>
      <li>Enregistrez vous en <strong>format paysage</strong>, dans un endroit calme et bien éclairé</li>
      <li>Les élus ne peuvent pas participer</li>
      <li>
        L'équipe se réserve le droit de refuser une contribution :
        <ul>
          <li>En cas d'appel à la haine ou de propos discriminatoires</li>
          <li>Si un argument similaire existe déjà</li>
        </ul>
      </li>
    </ul>
    <hr/>
    <p className="has-text-centered">
      Pour plus de détails sur les conditions et notre politique en matière de vie privée,
      consultez <Link target="_BLANK" to="/conditions">cette page</Link>.
    </p>
  </div>

export default Rules