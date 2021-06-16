import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/courses' component={Courses} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;