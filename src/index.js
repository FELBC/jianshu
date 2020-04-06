import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont.js';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
