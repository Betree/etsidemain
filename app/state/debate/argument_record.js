import { Record } from 'immutable'


const Argument = Record({
  id: 0,
  label: "",
  firstName: "",
  lastName: "",
  picture: "/img/head.jpg",
  content: "",
  category1: "",
  category2: null,
  confirm: null,
  refute: null,
  info: null,
  replyTo: null
})

export default Argument