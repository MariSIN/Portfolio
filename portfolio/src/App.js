import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <>
        <nav className="links">
          <BrowserRouter>
              <Home exact path="/" component={ Home } />
              <Link to="/about">about
              <Route path="/about" component={ About } /></Link>
              <Link to="/profile">profile
              <Route path="/profile" component={ Profile } /></Link>
          </BrowserRouter>
        </nav>
      </>
    );
  }
}

export default App;
