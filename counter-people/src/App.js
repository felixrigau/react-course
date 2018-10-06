import React, { Component } from 'react';
import './App.css';
import {addPerson, decreasePerson, cleanRoom, fullRoom} from './store'
import {connect} from 'react-redux'
import WarningComponent from './WarningComponent'

export class App extends Component {
  render() {
    const {addPerson, decreasePerson, cleanRoom, fullRoom, counter} = this.props;
    return (
      <div className="App">
        <div>
          <h3>Amount people:</h3>
        </div>
        <div>
          <h1>{counter}</h1>
        </div>
        <div>
          <input type ="button" value="+" onClick={() => addPerson()}></input>
          <input type ="button" value="-" onClick={() => decreasePerson()}></input>
          <input type ="button" value="Clear" onClick={() => cleanRoom()}></input>
          <input type ="button" value="Full" onClick={() => fullRoom()}></input>
        </div>
        <WarningComponent/>
      </div>
    );
  }
}

const mapStateToProps = state => ({counter: state});

const mapDispatchToProps = ({
  addPerson,
  decreasePerson,
  cleanRoom, 
  fullRoom
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
