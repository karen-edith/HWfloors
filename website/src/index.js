import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/about' component={AboutUs}></Route>
    </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
