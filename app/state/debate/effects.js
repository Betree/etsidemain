import { Record, Map, List } from 'immutable'

// import rawData from '../../assets/data.json'
import { actionFetchData, actionFetchFacts, setLoadingData, setLoadingFacts } from './reducer'
import Argument from './argument_record'
import HttpAPI from '../../API'


const COL_ID          = 'id'
const COL_FIRST_NAME  = 'Prénom'
const COL_LAST_NAME   = 'Nom'
const COL_LABEL       = 'Titre'
const COL_CONTENT     = 'Contenu'
const COL_CATEGORY_1  = 'Catégorie 1'
const COL_CATEGORY_2  = 'Catégorie 2'
const COL_CONFIRM     = 'Confirme'
const COL_REFUTE      = 'Réfute'
const COL_INFOS       = 'Infos'
const COL_REPLY_TO    = 'Répond à'
const COL_OCCUPATION  = 'Fonction'

const CONTRIBUTIONS_KEY = "Contributions"
const CATEGORIES_KEY = "Catégories"

function prepareContribution(contrib) {
  return Argument({
    id: parseInt(contrib[COL_ID]),
    label: contrib[COL_LABEL],
    speaker: new Record({
      firstName: contrib[COL_FIRST_NAME],
      lastName: contrib[COL_LAST_NAME],
      picture: `/img/speakers/${contrib[COL_ID]}.jpg`,
      occupation: contrib[COL_OCCUPATION] || "Citoyen·ne"
    })(),
    content: contrib[COL_CONTENT],
    category1: contrib[COL_CATEGORY_1],
    category2: contrib[COL_CATEGORY_2] || null,
    confirm: contrib[COL_CONFIRM] || null,
    refute: contrib[COL_REFUTE] || null,
    info: contrib[COL_INFOS] || null,
    replyTo: contrib[COL_REPLY_TO] || null
  })
}

export const fetchData = () => dispatch => {
  dispatch(setLoadingData(true))
  HttpAPI.get("/data.json").then(rawData => {
    dispatch(actionFetchData({
      categories: rawData[CATEGORIES_KEY],
      contributions: new List(rawData[CONTRIBUTIONS_KEY].map(prepareContribution))
    }))
  })
}

export const fetchFacts = () => dispatch => {
  dispatch(setLoadingFacts(true))
  HttpAPI.get("/facts.json").then(rawData => {
    dispatch(actionFetchFacts(rawData))
  })
}