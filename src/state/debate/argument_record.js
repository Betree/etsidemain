import { Record } from 'immutable'


const Argument = Record({
  id: 0,
  label: "",
  content: "",
  category1: "",
  category2: null,
  confirm: null,
  refute: null,
  info: null,
  replyTo: null,
  speaker: new Record({
    firstName: "",
    lastName: "",
    picture: "/img/head.jpg",
    occupation: "Citoyen·ne"
  })()
})

export default Argument