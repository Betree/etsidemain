import React from "react"
import { connect } from 'react-redux'
import { ReactCytoscape } from 'react-cytoscape'

import graphStyle from './style'
import graphLayout from './layout'
import graphOptions from './options'
import { showModal } from '../../state/modal/reducer'
import prepareData from './data_converter'


@connect(({Debate: {categories, contributions}}) => ({categories, contributions}), {showModal})
export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props)
    this.cy = null
    this.activeNodes = null
  }

  render() {
    return (
      <ReactCytoscape
        cyRef={cy => this.initCy(cy)}
        elements={prepareData(this.props.categories, this.props.contributions)}
        cytoscapeOptions={graphOptions}
        style={graphStyle}
        layout={graphLayout}
      />
    )
  }

  initCy(cy) {
    this.cy = cy

    // Taping on category
    cy.on('tap', 'node.category', event => {
      this.unselectCategory()
      this.activeNodes = event.target.outgoers('edge,.argument').union(event.target)
      this.activeNodes.addClass('active')
      cy.animate({
        zoom: 2,
        // fit: this.activeNodes,
        center: {eles: event.target},
        duration: 750,
        easing: 'ease-out'
      })
    })

    // Taping on main node (dezoom)
    cy.on('tap', 'node.main', event => {
      this.unselectCategory()
      cy.animate({
        zoom: 1,
        center: {eles: event.target},
        duration: 750,
        easing: 'ease-out'
      })
    })

    // Taping on argument / question (show modal)
    cy.on('tap', 'node.argument', event => {
      cy.animate({
        zoom: 2,
        center: {eles: event.target},
        duration: 500,
        easing: 'ease-out',
        complete: () => this.props.showModal(event.target.data())
      })
    })
    // Helpers
    cy.on('mouseover', 'node.active,node.category,node.main', event => {
      document.querySelector('body').style.cursor = 'pointer'
      event.target.addClass('hover')
    })
    cy.on('mouseout', 'node.active,node.category,node.main', event => {
      document.querySelector('body').style.cursor = 'auto'
      event.target.removeClass('hover')
    });
  }

  unselectCategory() {
    if (this.activeNodes)
      this.activeNodes.removeClass('active')
    this.activeNodes = null
  }
}
