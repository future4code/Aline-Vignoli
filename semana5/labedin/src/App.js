import React from 'react';
import './App.css';
import foto from './img/aline-perfil.png';
import logoLabenu from './img/labenu-logo.png';
import logoCorpoFechadoFloripa from './img/corpo-fechado-floripa.jpg';
import logoBlackStone from './img/black-stone.jpg';
import logoUdemy from './img/udemy-logo.png';
import iconeEmail from './img/email-icon.png';
import iconeMap from './img/local-icon-map.png';
import iconeIngles from './img/english-icon.png';
import iconeGit from './img/git-icon.png';
import iconeJava from './img/java-icon.png';
import iconeHTML from './img/html-icon.png';
import iconeCSS from './img/css-icon.png';
import iconeJS from './img/js-icon.png';
import iconeAndroid from './img/android-icon.png';
import iconeFirebase from './img/firebase-icon.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardCursos from './components/CardCursos/CardCursos';
import CardLista from './components/CardLista/CardLista';

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

        <CardPequeno
          imagem={iconeEmail}
          nome="E-mail:"
          descricao="nyhv.contato@gmail.com"
        />

        <CardPequeno
          imagem={iconeMap}
          nome="Enderaço:"
          descricao="Rua das Gaivotas, 420"
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoCorpoFechadoFloripa} 
          nome="Corpo Fechado Floripa Studio" 
          descricao="CEO e Tatuadora" 
        />

        <CardGrande 
          imagem={logoBlackStone} 
          nome="Black Stone Tattoo Shop" 
          descricao="Tatuadora" 
        />
      </div>

      <div className="page-section-container">
        <h2>Cursos</h2>
        <CardCursos 
          imagem={logoLabenu} 
          instituicao="Labenu" 
          descricao="Desenvolvimento Web Full Stack."
          periodo="2020 ~ presente" 
        />
        
        <CardCursos 
          imagem={logoUdemy} 
          instituicao="Udemy" 
          descricao="Desenvolvimento Mobile Android"
          periodo="2020 ~ presente" 
        />
      </div>

      <div className="page-section-container">
        <h2>Hard Skills</h2>
        <CardLista
          imagem={iconeIngles}
          nome="Inglês avançado"
        />

        <CardLista
          imagem={iconeGit}
          nome="GIT"
        />

        <CardLista
          imagem={iconeJava}
          nome="Java"
        />

        <CardLista
          imagem={iconeAndroid}
          nome="Desenvolvimento Mobile com Android Studio"
        />

        <CardLista
          imagem={iconeFirebase}
          nome="Firebase"
        />

        <CardLista
          imagem={iconeHTML}
          nome="HTML5"
        />

        <CardLista
          imagem={iconeCSS}
          nome="CSS3"
        />

        <CardLista
          imagem={iconeJS}
          nome="Javascript"
        />
      </div>

      <div className="page-section-container">
        <h2>Soft Skills</h2>
        <CardLista
          imagem="https://static.thenounproject.com/png/1681604-200.png"
          nome="Resolução de problemas"
        />

        <CardLista
          imagem="http://cdn.onlinewebfonts.com/svg/img_502606.png"
          nome="Empatia"
        />

        <CardLista
          imagem="https://cdn.iconscout.com/icon/premium/png-256-thumb/time-management-19-588540.png"
          nome="Gerenciamento de tempo e pontualidade"
        />

        <CardLista
          imagem="https://th.bing.com/th/id/OIP.kMJzI7cqBd7CpU_TnQaU8QHaHa?pid=Api&rs=1"
          nome="Confiabilidade"
        />

        <CardLista
          imagem="https://cdn0.iconfinder.com/data/icons/soft-skills-linear-black-1/2048/7582_-_Integrity_and_Principles-512.png"
          nome="Ética"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://th.bing.com/th/id/OIP.14hn343P6HKiPKkxJqDh9gHaGj?w=202&h=180&c=7&o=5&pid=1.7" 
          texto="LinkedIn"
          link="https://www.linkedin.com/nyhvignoli" 
        />        

        <ImagemButton 
          imagem="https://milindjagre.files.wordpress.com/2017/09/github.png" 
          texto="GitHub" 
          link="https://github.com/nyhvignoli"
        />        
      </div>
    </div>
  );
}

export default App;
