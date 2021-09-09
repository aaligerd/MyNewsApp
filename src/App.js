import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {

  render() {
    return (
      <div>
          <NavBar/>
          <NewsComponent/>
      </div>
    )
  }
}

