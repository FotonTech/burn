// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import { store } from './src/redux/store'
import { Home } from './src/scenes'

const RootStack = createStackNavigator({
  Home,
},
{
  headerMode: 'none',
})

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)
