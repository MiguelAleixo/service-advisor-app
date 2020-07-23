import * as React from 'react';
import Main from './src/Main';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import login from './src/screens/Login/controller/reducer'
import myServices from './src/screens/MyServices/controller/reducer'
import services from './src/screens/Services/controller/reducer'
import mySolicitation from './src/screens/Profile/controller/reducer'


const store = createStore(
  combineReducers({
    login,
    myServices,
    services,
    mySolicitation
  }),
  applyMiddleware(thunk)
)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
