import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
import AppReduxSample from './AppReduxSample';
import * as serviceWorker from './serviceWorker';

// ステートの値
let state_value = {
  counter: 0,
  message: 'COUNTER',
};

// レデューサー
function counter(state = state_value, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'INCREMENT',
      };
      break;
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: 'DECREMENT',
      };
    default:
      return state;
  }
}

// ストアを作成
let store = createStore(counter);

// 表示をレンダリング
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
    <Provider store={store}>
      <AppReduxSample></AppReduxSample>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
