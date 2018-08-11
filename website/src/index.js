import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={HomePage}></Route>
    </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
