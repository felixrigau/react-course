import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {T24} from './t24'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: Date.now()
    }
  }
  componentDidMount() {
    setInterval(() => this.updateTime(), 100)
  }
  updateTime(){
    this.setState({time: Date.now()})
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <T24 time={Math.floor(this.state.time/1000)} />
        </header>
      </div>
    );
  }
}

export default App;
