//Import
//------------------------------------------------------------------------------
import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';


//Code
//------------------------------------------------------------------------------
class App extends Component {
  render() {
    return (
      <div className='app-container'>

      </div>
    )
  }
}

function putStateToProps(state) {
  return {};
}

function putActionsToProps(dispatch) {
  return {};
}

export default connect(putStateToProps, putActionsToProps)(App);