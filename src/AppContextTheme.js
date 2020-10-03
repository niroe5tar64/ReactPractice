import React, { Component } from 'react';
import './App.css';

let theme = {
  lignt: {
    backgroundColor: '#eef',
    color: '#006',
    padding: '10px',
  },
  dark: {
    backgroundColor: '#006',
    color: '#eef',
    padding: '10px',
  },
};

const ThemeContext = React.createContext(theme.lignt);
// const ThemeContext = React.createContext(theme.dark);

class AppContextTheme extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div style={this.context}>
        <h1>AppContextTheme</h1>
        <Title value="Content page"></Title>
        <Message value="This is Content sample."></Message>
        <Message value="※これはテーマのサンプルです。"></Message>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <h2 style={this.contex}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    );
  }
}

export default AppContextTheme;
