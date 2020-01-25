import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import SideBar from './layout/SideBar';
import Footer from './layout/Footer';

export default function App() {
  return (
    <Router>
      <SideBar />
      <main id='main'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
