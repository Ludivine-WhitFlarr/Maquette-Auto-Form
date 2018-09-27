import React , { Component } from 'react';
import { Parallax } from 'react-parallax';
import Img1 from '../img/fond.jpg';

export default class Contact extends Component {
  render(){
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    const insideStyles = {
      background: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    return (
      <div className="Contact">
        <h2>Contact</h2>
        <form>
          <input type='text' placeholder="mail" />
          <textarea placeholder="contenue"></textarea>
          <button>Envoyer</button>
        </form>
        <Parallax bgImage={Img1} strength={500} className="Parallax">
          <div style={{ height: 500 }}>
          </div>
        </Parallax>
      </div>
    );
  }
}
