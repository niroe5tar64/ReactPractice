import React, { Component } from 'react';
import './App.css';

class AppStateSample extends Component {
  msgStyle = {
    fontSize: '24pt',
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
    borderBottom: '2px solid #900',
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: 'StateMessage',
    };

    setInterval(() => {
      this.setState((state) => ({
        msg: state.msg + '!',
      }));
    }, 3000);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>AppStateSample</h1>
        <p style={this.msgStyle}>{this.state.msg}</p>
        <p style={this.msgStyle}>{this.props.msg}</p>
      </div>
    );
  }
}

export default AppStateSample;
