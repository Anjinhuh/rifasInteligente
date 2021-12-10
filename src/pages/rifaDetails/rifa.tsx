import React from 'react'
import api from '../../services/api';
import logo from '../public/logoRifas.svg'
import text from '../public/Rifasinteligente.svg'
import './rifa.css'


export default function Rifa(){
    return(
        <div className="AA">
          <header className="header">

            <div className="logoDiv">
              <img src={logo} alt="logo" />
              <img src={text} alt="textLogo" />
            </div>

            <div className="text">
              <p>Criar rifa</p>
              <p>Buscar rifas</p>
              <p>Quem somos?</p>
            </div>
            
          </header>
        </div>
    )
}