// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import TechnicalSkills from './pages/TechnicalSkills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Education" component={Education} />
          <Route path="/TechnicalSkills" component={TechnicalSkills} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Certifications" component={Certifications} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

