import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <p>
          Meu nome é Mariana, tenho 24 anos e sou natural de Itaperuna, RJ. Sou
          formada em Enfermagem mas nunca atuei na área. Atualmente faço um
          curso de desenvolvimento web fullstack da Trybe e estou passando por
          uma transição de carreira. Neste curso aprendi os fundamentos do
          desenvolvimento web, e estou aprendendo desenvolvimento Front-end. O
          próximo módulo será Back-end. Também irei desenvolver conhecimentos
          sobre ciência da computação, metodologias ágeis e habilidades
          comportamentais. Estudo também UX/UI design pela Origamid. Sou
          musicista, toco profissionalmente em eventos e dou aula de flauta
          transversal.
        </p>
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}

export default About;
