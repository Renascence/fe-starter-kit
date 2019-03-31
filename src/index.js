import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import reducers from './reducers/index';
const store = createStore(combineReducers(reducers));

class AppWrapper extends React.Component{
  render() {
    return <Provider store={store}>
      <App />
    </Provider>;
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
