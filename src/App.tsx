import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/configureStore'

export const App = () => {
  return (
    <Provider store={store}>
      <div>App</div>
    </Provider>
  )
}
