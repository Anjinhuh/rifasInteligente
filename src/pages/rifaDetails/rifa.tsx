import React from 'react'
import api from '../../services/api';
import imagemRifa from '../public/imageRifa.svg'
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
          
              <div className="boxRifas">
                  <img src={imagemRifa} alt="Imagem para rifa" />


                  <div className="fixBoxes">
                      <div className="detailsRifas" >
                        <p className="titleRifa">Hyundai IX35</p>
                        <p className="descriptionRifa">Veículo muito bom, sendo rifado para custear um tratamento de saúde, no qual necessita-se de 200K, mas, outros bens serão rifados. Veículo 2012, versão mais completa. Apenas 88.000 KM rodados. Não necessita de revisões ou coisa do tipo.</p>
                      </div>
                      <div className="moneySection">
                        <p>54% ARRECADADO</p>
                      </div>
                      <div className="doarSection">
                        <p>DOAR</p>
                      </div>
                  </div>

              </div>
              
         
        </div>
    )
}