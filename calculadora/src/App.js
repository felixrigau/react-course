import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      focus: 'first',
      first: '',
      second: '',
      result: '',
      operator: '',
    };
  }

  numbers = [0,1,2,3,4,5,6,7,8];

  insertNumber(input, value){
    this.setState({[input]: value});
  }

  handleChangeInput(e){
    const {focus} = this.state;
    const value = e.target.value;
    this.insertNumber(focus, value);
  }

  handleSelectInput(e){
    const value = e.target.id;
    this.setState({focus: value});
  }

  handleNumberClick(e){
    const {focus} = this.state;
    const previusValue = this.state[focus];
    const value = e.target.id;
    this.insertNumber(focus, previusValue+value);
  }

  handleClearClick(e){
    this.setState({
      first: '',
      second: '',
      result: '',
      operator: '',
    });
  }

  handleOperatorClick(e){
    const value = e.target.id;
    this.setState({operator: value});
  }

  calculateResult(){
    const {first, second, operator} = this.state;
    switch (operator) {
      case 'btnPlus':
        return (parseInt(first, 10) + parseInt(second, 10)).toString();
      case 'btnLess':
        return (parseInt(first, 10) - parseInt(second, 10)).toString();
      case 'btnMultiply':
        return (parseInt(first, 10) * parseInt(second, 10)).toString();
      default :
        return (parseInt(first, 10) / parseInt(second, 10)).toString();
    }
  }

  handleEqualClick(e){
    const {first, second} = this.state;
    if(first && second) {
      this.setState({result: this.calculateResult()})
    } else {
      alert('Ambos valores son requeridos para realizar la operación.')
    }
  }

  boxStyle = {width: '100px', height: '100px', padding: 0, margin: 0, border: '1px solid #efefef', fontSize: '18px'};
  section = {display: 'flex', width: '400px'};

  render() {
    return (
      <div className="App">
        <div style={this.section}>
          <input style={this.boxStyle} id="first" type="number" value={this.state.first} onChange={e => this.handleChangeInput(e)} onClick={e => this.handleSelectInput(e)}></input>
          <p style={this.boxStyle}>{this.state.operator}</p>
          <input style={this.boxStyle} id="second" type="number" value={this.state.second} onChange={e => this.handleChangeInput(e)} onClick={e => this.handleSelectInput(e)}></input>
          <p style={this.boxStyle}>{this.state.result}</p>
        </div>
        <div style={this.section}>
          <div>
            {this.numbers.map(
              element => (
                <button style={this.boxStyle} key={element.toString()} id={'btn'+element} onClick={e => this.handleNumberClick(e)}>{element}</button>
              )
            )}
          </div>
          <div>
            <button style={this.boxStyle} id="btnPlus" value="+" onClick={e => this.handleOperatorClick(e)}>+</button>
            <button style={this.boxStyle} id="btnMultiply" value="*" onClick={e => this.handleOperatorClick(e)}>*</button>
            <button style={this.boxStyle} id="btnLess" value="-" onClick={e => this.handleOperatorClick(e)}>-</button>
          </div>
        </div>
        <div style={this.section}>
          <button style={this.boxStyle} id="btn9" onClick={e => this.handleNumberClick(e)}>9</button>
          <button style={this.boxStyle} onClick={() => this.handleClearClick()}>C</button>
          <button style={this.boxStyle} id="equal" onClick={() => this.handleEqualClick()}>=</button>
          <button style={this.boxStyle} id="btnDivide" onClick={e => this.handleOperatorClick(e)}>/</button>
        </div>
      </div>
    );
  }
}

export default App;
