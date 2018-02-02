import React from 'react'


export default class UsefulResources extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {filter: null}
  }

  render() {
    const resources = this.getResources()
    return (
      <nav className="panel">
        <p className="panel-tabs">
          <a className={this.resourceCategoryClassName(null)} onClick={() => this.setState({filter: null})}>
            Tout
          </a>
          {this.props.types.map(type => 
            <a key={type} className={this.resourceCategoryClassName(type)} onClick={() => this.setState({filter: type})}>
              {type}
            </a>
          )}
        </p>
        {this.renderResourcesList(resources)}
    </nav>
    )
  }

  renderResourcesList(resources) {
    if (resources.length === 0)
      return <div className="panel-block" style={{justifyContent: 'center'}}>Aucune ressource trouvée dans cette catégorie</div>
    return resources.map(resource =>
      <a key={resource.URL} href={resource.URL} target="_BLANK" className="panel-block">
        <span className="panel-icon">
          <i className={this.Icons[resource.Type]}/>
        </span>
        {resource.Title}
      </a> 
    )
  }

  resourceCategoryClassName(category) {
    if (category === this.state.filter)
      return 'is-active'
  }

  getResources() {
    if (!this.state.filter)
      return this.props.resources
    return this.props.resources.filter(r => r.Type === this.state.filter)
  }

  Icons = {
    "Textes": "icon-book",
    "Conférences": "icon-mic",
    "Sites Internet": "icon-internet"
  }
}

