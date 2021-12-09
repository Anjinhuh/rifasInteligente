import React, { useEffect } from 'react';
import logo from './public/logoRifas.svg'
import dinheiro from './public/dinheirovector.svg'
import text from './public/Rifasinteligente.svg'
import './App.css';
import api from '../services/api';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

export default function Ladingpage() {
  useEffect(() => {
    api.get('/').then(response =>{
      console.log(response.data)
    })
  })
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
          <div className="announceFix">
            <div className="announceCreate">
              <p className="firstText">Crie sua rifa conosco</p>
              <p className="textDiferent">O jeito mais <p className="inteligentText">inteligente </p> de se criar uma rifa</p>
            </div>
            <div className="buttonAnounce">
              <button onClick={() => {alert("Clicado")}}>Criar Rifa</button>
            </div>
          </div>
       </div>
       <div className="helpText">
         <div>   
            <div className="text">
                <p className="AA0">Contamos com sua ajuda!</p>  
                <p className="AA1">Assim como você, nós precisamos de ajuda. </p>
                <p className="AA1">Apesar de estarmos no início, temos maturidade para negócios.</p>
                <p className="AA1">Nós temos como principal objetivo a segurança e agilidade. </p>
                <p className="AA1">Tal motivo, resulta em nosso nome, Rifa Inteligente.</p>
            </div>

            <div className="text">
                <p className="AA0">Aproveite as condições</p>  
                <p className="AA1">Como estamos no início, promovemos alguns benefícios, como os mostrado ao lado</p>
            </div>
         </div>
         <div className="boxBeneficios">
          <img src={dinheiro} alt="Dinheiro" />
          <p className="AA2">SEM TAXA!</p>
          <p className="AA3">Condiçoes especiais</p>
          <div className="fixAA4">
            <p className="AA4">° Caso não haja a meta alcançada</p>
            <p className="AA4">° Caso o prazo não se cumpra</p>
            <p className="AA4">° Pagamento feito em até 24 HRS</p>
          </div>
          

          

         </div>
       </div>
    </div>
  );
}

