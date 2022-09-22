import React, { Component } from 'react';
import Mariana from '../img/Mariana.png'

class Main extends Component {
  render() {
    return (
      <main>
        <img src={ Mariana } alt='Mariana' className='foto-mariana' />
      </main>
    );
  }
}

export default Main;
