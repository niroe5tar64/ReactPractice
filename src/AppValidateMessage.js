import React, { Component } from 'react';
import './App.css';

class AppValidateMessage extends Component {
  input = '';

  msgStyle = {
    fontSize: '20pt',
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
  };

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name.',
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event) {
    alert(event.target.value + 'は長すぎます。(最大10文字)');
  }

  render() {
    return (
      <div>
        <h1>AppValidateMessage</h1>
        <h2>{this.state.message}</h2>
        <Message maxlength="10" onCheck={this.doCheck}></Message>
      </div>
    );
  }
}

class Message extends Component {
  inputStyle = {
    fontSize: '12pt',
    padding: '5px',
  };

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(event) {
    console.log('doChange');
    if (event.target.value.length > this.props.maxlength) {
      this.props.onCheck(event);
      event.target.value = event.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          style={this.inputStyle}
          onChange={this.doChange}
        ></input>
      </div>
    );
  }
}

export default AppValidateMessage;
