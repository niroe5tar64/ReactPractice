import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRect from './AppRect';
import AppStateSample from './AppStateSample';
import AppButton from './AppButton';
import AppStateSwitch from './AppStateSwitch';
import AppStateRect from './AppStateRect';
import AppListComponent from './AppListComponent';
import AppMessageForm from './AppMessageForm';
import AppValidateMessage from './AppValidateMessage';
import AppContextSample from './AppContextSample';
import AppProviderSample from './AppProviderSample';
import AppContextTheme from './AppContextTheme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App title="タイトル１" message="メッセージ" />
    <App title="タイトル２" message="メッセージ" />
    <AppRect></AppRect>
    <AppStateSample msg="PropsMessage."></AppStateSample>
    <AppButton></AppButton>
    <AppStateSwitch></AppStateSwitch>
    <AppStateRect></AppStateRect>
    <AppListComponent></AppListComponent>
    <AppMessageForm></AppMessageForm>
    <AppValidateMessage></AppValidateMessage>
    <AppContextSample></AppContextSample>
    <AppProviderSample></AppProviderSample>
    <AppContextTheme></AppContextTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
