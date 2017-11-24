import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import store from './state'
import App from 'components/App'


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  )
});
