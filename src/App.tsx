import React from 'react';
import logo from './logoRifas.svg'
import text from './Rifasinteligente.svg'
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="announcePart">
          <header className="headerPart">
            <div className="logoDiv">
              <img src={logo} alt="logo" />
              <img src={text} alt="textLogo" />
            </div>
            <div className="textDiv">
              <p>Criar rifa</p>
              <p>Buscar rifas</p>
              <p>Quem somos?</p>
            </div>
          </header>
          <div className="announceCreate">
            <p className="firstText">Crie sua rifa conosco</p>
            <p className="textDiferent">O jeito mais <p className="inteligentText">inteligente </p> de se criar uma rifa</p>
          </div>
          <div className="buttonAnounce">
            <button onClick={() => {alert("Clicado")}}>Criar Rifa</button>
          </div>
       </div>
    </div>
  );
}

export default App;
