import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </header>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
    );
  }
}

export default App;

const Home = () => (
  <div>
    <h2>
        Home
    </h2>
  </div>
)

const About = () => (
  <div>
    <h2>
      About
    </h2>
  </div>
)
