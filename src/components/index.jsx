import React from 'react';
import Home from './Home/home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { applyMiddleware, createStore, combineReducers } from 'redux';

import reducers from '../reducers/index';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <Route path='/home' exact component={Home} />
      </BrowserRouter>
    </Provider>;
  }
} 
