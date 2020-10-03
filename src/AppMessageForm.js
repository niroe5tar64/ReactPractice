import React, { Component } from 'react';
import './App.css';

class AppMessageForm extends Component {
  input = '';

  msgStyle = {
    fontSize: '20pt',
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
  };
  inputStyle = {
    fontSize: '12pt',
    padding: '5px',
  };

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name.',
    };
    this.doChange = this.doChange.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '!!',
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>AppMessageForm</h1>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.doSubmit}>
          <label>
            <span style={this.inputStyle}>Message: </span>
          </label>
          <input
            type="text"
            style={this.inputStyle}
            onChange={this.doChange}
          ></input>
          <input type="submit" style={this.inputStyle} value="Click"></input>
        </form>
      </div>
    );
  }
}

export default AppMessageForm;
