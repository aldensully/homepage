import React from 'react';
import Homepage from './pages/homepage.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Projects from './pages/projects.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({ Component }) {
  return (
    <Router>
      <Switch>
        <Homepage path="/home" />
        <Route path="/home">
          <Homepage path="/home" />
        </Route>
        <Route path="/about">
          <About path="/about" />
        </Route>
        <Route path="/projects">
          <Projects path="/projects" />
        </Route>
        <Route path="/contact">
          <Contact path="/contact" />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
