import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Mariana</h1>
        <nav className='links'>
            <a href='/'>Experiência </a>
            <a href='/'>Formação </a>
            <a href='/'>Contato </a>
         </nav>
      </header>
    );
  }
}

export default Header;
