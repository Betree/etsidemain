/**
* Transform regular state data to nodes and links ready to be exploited by Cytoscape
*/


const createNode = (id, classes, label, deepness, data=null, props=null) => {
  const baseData = {id, label, deepness}
  const baseProps = {classes, data: data ? Object.assign(baseData, data) : baseData}
  return props ? Object.assign(baseProps, props) : baseProps
}

function generateLinks(sourceNode, childNodes, deepness) {
  const links = []
  for (let childNode of childNodes) {
    links.push({
      data: {source: sourceNode.data.id, target: childNode.data.id, deepness},
    })
  }
  return links
}

function linkCategoriesToArguments(args) {
  const links = []
  for (let argument of args) {
    links.push({data: {source: argument.data.category1, target: argument.data.id, deepness: 1}})
    if (argument.data.category2)
      links.push({data: {source: argument.data.category2, target: argument.data.id, deepness: 1}})
  }
  return links

}

const prepareData = (categories, contribs) => {
  // Create main node
  const mainNode = createNode(
    'main', 'main',
    'Et si demain, la Nouvelle-Calédonie devenait indépendante ? Et si demain, la Nouvelle Calédonie restait dans la France ?',
    0, null, {locked: true, position: {x: window.innerWidth / 2, y: window.innerHeight / 2}}
  )

  // Create categories - deepness to 2 because 1 is for the link with mainNode
  const categoriesNodes = categories.map(title => createNode(title, 'category', title, 2))

  // Create argument nodes
  const contribNodes = contribs.map(arg => createNode(arg.id, 'argument', arg.label, 4, arg.toJS()))

  // Return all the stuff with links
  return [
    mainNode,
    ...categoriesNodes,
    ...contribNodes,
    ...generateLinks(mainNode, categoriesNodes, 1),
    ...linkCategoriesToArguments(contribNodes),
    // TODO ...linkReplies
  ]
}

export default prepareData