/**
* Transform regular state data to nodes and links ready to be exploited by Cytoscape
*/


const createNode = (id, classes, Title, deepness, data=null, props=null) => {
  const baseData = {id, Title, deepness}
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
    links.push({data: {source: argument.data.Category1, target: argument.data.id, deepness: 3}})
    if (argument.data.category2)
      links.push({data: {source: argument.data.Category2, target: argument.data.id, deepness: 3}})
  }
  return links

}

const prepareData = (categories, contribs) => {
  // Create main node
  const mainNode = createNode(
    'main', 'main',
    'Et si demain la Calédonie...\nÉtait indépendante ?\nRestait dans la France ?',
    0, null, {locked: true, position: {x: window.innerWidth / 2, y: window.innerHeight / 2}}
  )

  // Create categories - deepness to 2 because 1 is for the link with mainNode
  const categoriesNodes = categories.map(title => createNode(title, 'category', title, 2))

  // Create argument nodes
  const contribNodes = contribs.map(arg => createNode(arg.id, 'argument', arg.Title, 4, arg))

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