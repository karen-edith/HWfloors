import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Porfolio from './pages/Portfolio';
import Services from './pages/Services';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/about' component={AboutUs}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/portfolio' component={Porfolio}></Route>
      <Route path='/services' component={Services}></Route>
    </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
