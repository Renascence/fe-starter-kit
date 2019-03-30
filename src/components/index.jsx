import React from 'react';
import Home from './Home/home';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
      <Route path='/home' exact component={Home} />
    </BrowserRouter>;
  }
} 