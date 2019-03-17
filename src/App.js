import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import state from './state/state';
import repository from './state/respository';
import { StateProvider } from './state/stateContext';

import Foo from './components/foo/foo.js';


class App extends Component {
  render() {
    console.log('rendering');
    console.log(state);
    return (
      <div className="App">
        <StateProvider value={{
          state,
          repository
        }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Foo></Foo>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </StateProvider>
      </div>
    );
  }
}

export default App;
