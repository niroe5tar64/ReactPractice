import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
    console.log(this.title + '#constructor');
    // var startMsec = new Date();
    // while (new Date() - startMsec < 1000);
  }
  render() {
    var startMsec = new Date();
    while (new Date() - startMsec < 1000);
    console.log(this.title + '#render');
    return (
      <div className="App">
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default App;
