import React, { Component } from 'react';
import './App.css';

class AppStateSwitch extends Component {
  msgStyle1 = {
    fontSize: '24pt',
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
    borderBottom: '2px solid #900',
  };
  msgStyle2 = {
    fontSize: '20pt',
    color: 'white',
    backgroundColor: '#900',
    margin: '',
    padding: '5px',
    borderBottom: '2px solid #900',
  };
  btnStyle = {
    fontSize: '16px',
    padding: '10px',
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start!',
      flg: true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg,
    }));
  }

  render() {
    return (
      <div>
        <h1>AppStateSwitch</h1>
        {this.state.flg ? (
          <p style={this.msgStyle1}>count:{this.state.msg}</p>
        ) : (
          <p style={this.msgStyle2}>{this.state.msg}です。</p>
        )}
        <button style={this.btnStyle} onClick={this.doAction}>
          AppStateSwitch
        </button>
      </div>
    );
  }
}

export default AppStateSwitch;
