import React from 'react';
import Home from './Home/home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

import reducers from '../reducers/index';
const store = createStore(combineReducers(reducers));

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <Route path='/home' exact component={Home} />
      </BrowserRouter>
    </Provider>;
  }
} 
