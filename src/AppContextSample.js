import React, { Component } from 'react';
import './App.css';

let data = { title: 'Title', message: 'this is sample message.' };

const SampleContext = React.createContext(data);

class AppContextSample extends Component {
  render() {
    return (
      <div>
        <h1>AppContextSample</h1>
        <Title></Title>
        <Message></Message>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default AppContextSample;
