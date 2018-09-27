import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

          <section id="Header">
              <h1>Titre</h1>
              <ul>
                  <li><a>Home</a></li>
                  <li><a>Galerie</a></li>
                  <li><a>Article</a></li>
                  <li><a>Tuto</a></li>
                  <li><a>Contact</a></li>
              </ul>
          </section>
    );
  }
}

export default Header;
