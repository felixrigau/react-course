import React, { Component } from 'react';
import {connect} from 'react-redux'

class WarningMessage extends Component {
  render(){
    const {counter} = this.props;
    if(counter >= 8 && counter <= 9){
      return "La sala se está llenando"
    }
    if(counter === 10){
      return "La sala esta llena"
    }

    if(counter > 10){
      return "La sala esta por encima de su capacidad"
    }

    return ""
  }
}

const mapStateToProps = state => ({
    counter: state
})

export default connect(mapStateToProps)(WarningMessage)