import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <SideBar />
      <main id='main'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
