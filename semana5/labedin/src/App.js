import React from 'react';
import './App.css';
import foto from './img/aline-perfil.png';
import logoLabenu from './img/labenu_logo.png';
import logoCorpoFechadoFloripa from './img/corpo-fechado-floripa.jpg';
import iconeEmail from './img/email-icon.png';
import iconeMap from './img/local-icon-map.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Aline Vignoli" 
          descricao="Oi, eu sou Aline Vignoli. Sou tatuadora e hoje me encontro em transição de carreira, migrando para a área da Programação. Atualmente estudo Desenvolvimento Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={iconeEmail}
          nome="E-mail:"
          descricao="email@fake.com"
        />

        <CardPequeno
          imagem={iconeMap}
          nome="Enderaço:"
          descricao="Rua das Gaivotas, 420"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoLabenu} 
          nome="Labenu" 
          descricao="Estudante Desenvolvimento Web Full Stack." 
        />
        
        <CardGrande 
          imagem={logoCorpoFechadoFloripa} 
          nome="Corpo Fechado Floripa" 
          descricao="CEO e Tatuadora." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
