import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { install } from 'redux-loop'
import reducers from './reducers'
import App from './app'

const initialState = {}
let store = createStore(reducers, initialState, install())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
