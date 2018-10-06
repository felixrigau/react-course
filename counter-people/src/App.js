import React, { Component } from 'react';
import './App.css';
import {addPerson, decreasePerson} from './store'
import {connect} from 'react-redux'
import WarningComponent from './WarningComponent'

export class App extends Component {
  render() {
    const {addPerson, decreasePerson, counter} = this.props;
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
        </div>
        <WarningComponent/>
      </div>
    );
  }
}

const mapStateToProps = state => ({counter: state});

const mapDispatchToProps = ({
  addPerson,
  decreasePerson
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
