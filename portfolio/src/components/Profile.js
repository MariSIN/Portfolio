import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mariana from '../img/Mariana.png'

class Profile extends Component {
  render() {
    return (
      <main>
        <img src={ Mariana } alt='Mariana' className='foto-mariana' />
        <Link to="/">Voltar à Home</Link>
      </main>
    );
  }
}

export default Profile;