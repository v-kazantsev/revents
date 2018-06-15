import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const app = <Provider store={configureStore()}><BrowserRouter><App /></BrowserRouter></Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);
registerServiceWorker();
