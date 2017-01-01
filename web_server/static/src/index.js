import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import reducer from './reducers'
import App from './containers/App'

const muiTheme = getMuiTheme({
  appBar: {
    height: 130,
  },
})

const middleware = [thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

/*
Main entry point into the app
*/
render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('container'),
)
