import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EntriesContainer from './containers/EntriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        Here is your home page!
        <Route exact={true} path="/" component={WelcomeContainer} />
        <Route exact={true} path="/entries" component={EntriesContainer}/>
        
        
        <WelcomeContainer />
      </div>
      </Router>
    );
  }
}

export default App;

{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
</header> */}
