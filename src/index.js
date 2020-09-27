import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRect from './AppRect';
import AppStateSample from './AppStateSample';
import AppButton from './AppButton';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App title="タイトル１" message="メッセージ" />
    <App title="タイトル２" message="メッセージ" />
    <AppRect></AppRect>
    <AppStateSample msg="PropsMessage."></AppStateSample>
    <AppButton></AppButton>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
