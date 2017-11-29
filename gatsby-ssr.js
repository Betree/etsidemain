import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import store from './src/state'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}