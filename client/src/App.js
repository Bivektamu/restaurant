import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Booking from './components/booking/Booking';
import Blogs from './components/blogs/Blogs';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';
import Default from './components/Default';

export default function App() {
  return (
    <Router>
      <SideBar />
      <main id='main'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/booking' exact component={Booking} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/blogs/:id' exact component={Blog} />
          <Route path='/contact' exact component={Contact} />
          <Route component={Default} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
