import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.min.css';
import App from './js/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
  library.add(faStroopwafel)
registerServiceWorker();
