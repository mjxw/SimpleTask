import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SimpleTask</h1>
          <h1 className="Welcome">Hello, User!</h1> 
        </header>
        <div className="Body">
          <Dashboard />
        </div>
        <div className="Powered">
          <small className="text-muted">Powered by SimpleTask</small>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
