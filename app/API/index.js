import rawData from '../assets/data.json'


const COL_ID          = 'id'
const COL_FIRST_NAME  = 'Prénom'
const COL_LAST_NAME   = 'Nom'
const COL_TITLE       = 'Titre'
const COL_URL         = 'URL'
const COL_CAEGORY_1   = 'Catégorie 1'
const COL_CAEGORY_2   = 'Catégorie 2'
const COL_CONFIRM     = 'Confirme'
const COL_REFUTE      = 'Réfute'
const COL_INFOS       = 'Infos'
const COL_REPLY_TO    = 'Répond à'
const EMPTY_COL_VALUE = "" // Define if empty columns are empty strings, null...etc

const CONTRIBUTIONS_KEY = "Contributions"
const CATEGORIES_KEY = "Catégories"


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
    if (argument.data.category2 !== EMPTY_COL_VALUE)
      links.push({data: {source: argument.data.category2, target: argument.data.id, deepness: 1}})
  }
  return links

}

const getData = () => {
  // Create main node
  const mainNode = createNode(
    'main', 'main',
    'Et si demain, la Nouvelle-Calédonie devenait indépendante ? Et si demain, la Nouvelle Calédonie restait dans la France ?',
    0, null, {locked: true, position: {x: window.innerWidth / 2, y: window.innerHeight / 2}}
  )

  // Create categories - deepness to 2 because 1 is for the link with mainNode
  const categories = rawData[CATEGORIES_KEY].map(title => createNode(title, 'category', title, 2))

  // Create argument nodes
  const args = rawData[CONTRIBUTIONS_KEY].map(arg => createNode(arg[COL_ID], 'argument', arg[COL_TITLE], 4, {
    firstName: arg[COL_FIRST_NAME],
    lastName: arg[COL_LAST_NAME],
    picture: "/img/head.jpg",
    content: arg[COL_URL],
    category1: arg[COL_CAEGORY_1],
    category2: arg[COL_CAEGORY_2],
    confirm: arg[COL_CONFIRM],
    refute: arg[COL_REFUTE],
    info: arg[COL_INFOS],
    replyTo: arg[COL_REPLY_TO]
  }))

  // Return all the stuff with links
  return [
    mainNode,
    ...categories,
    ...args,
    ...generateLinks(mainNode, categories, 1),
    ...linkCategoriesToArguments(args),
    // TODO ...linkReplies
  ]
}

export default getData