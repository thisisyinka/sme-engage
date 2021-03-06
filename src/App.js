import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/pages/Footer';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/SignUp/SignUp';
require('dotenv').config();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/sme-engage" exact component={Home} />
        <Route path="/sme-engage/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
