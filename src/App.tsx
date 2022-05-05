import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filip_face from './imgs/Filip_face.jpg';

function App() {
  return (
    <div>
      {/* <a href="en.html"> EN</a>  */}
      <div className='grid-2'>
        <div className='section-1'>
          <h1 className="title-main">1PK0</h1>
          <img className="round" src={ Filip_face } alt="Filip" />
          <h2>Filip Vnenčák</h2>
          <p>Spišská Belá</p>
          <a href = "mailto: filip.vnencak@1pk0.sk"><i className="fas fa-at"></i></a>
          <a href="https://www.linkedin.com/in/filip-vnencak-224093118/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/filipvnencak"target="_blank"><i className="fab fa-github"></i></a>
          <h2>Skills</h2>
          <li><h5>HTML</h5> <span className="bar"> <span className="html"></span></span></li>
          <li><h5>CSS</h5><span className="bar"> <span className="css"></span></span></li>
          <li><h5>ANGULAR</h5><span className="bar"> <span className="angular"></span></span></li>
          <li><h5>IONIC</h5><span className="bar"> <span className="ionic"></span></span></li>
          <li><h5>3D Design</h5><span className="bar"> <span className="design"></span></span></li>
          <li><h5>CURA</h5><span className="bar"> <span className="cura"></span></span></li>
          <li><h5>3D tlač</h5><span className="bar"> <span className="print"></span></span></li>
        </div>
          <div className='section-2'>
          <h2>O mne</h2>
            <p>Mám rád jednoduchosť.<br /> Rád sa učim. Nerád stagnujem. <br />Mám záľubu v behaní, lezení, horách a rád čítam. <br /><small>PS: Ak ste čítali knihu obklopený idiotmi, tak som žltý.</small> </p>
           
          
            <h2>Pracoval som</h2>
            <a href="http://faceclub.spisskabela.sk/?fbclid=IwAR1qcMDvu5QKniYzjjJLdNM7oFefldZhEJRMBWg0YaU4l4D9G6bFGw_s7ys" target="_blank">Face Club</a>
            <a href="http://ozviac.sk" target="_blank">V.I.A.C. - Inštitút pre podporu a rozvoj mládeže</a>
           
            <h2>Pracujem v</h2>
            <a href= "http://aapo.sk" target="_blank">AAPO - Centrum neformálneho a zážitkového vzdelávania</a>
            <a href="https://www.linkedin.com/company/skicontrol/about/" target="_blank">Skicontrol (SKIDATA)</a>
            <h2>Skúsenosti</h2>
            <p>3 roky ako dobrovoľník vo Face Clube - organizovanie podujatí pre deti a mládež, organizovanie konferencií, napr. #MladíMladým, zodpovednosť za technické vybavenie.<br /> </p>
          <p>2 roky vo V.I.A.C. som bol zodpovedný za siete a počítače, technické vybavenie, organizovali sme ešte viac konferencii ako YoDel, Inšpiratívna konferencia KROK a iné. <br /></p> 
           <p> Momentálne pracujem v SKICONTROL - venujeme sa kontrolovanému prístupu na lyžiarských strediskách, zábavných parkoch... ale to najmä v zime, v lete pracujem na appke, ktorá je zatiaľ vo vývoji.</p>
           <a href="https://dashboard.ionicframework.com/preview/d1b75d8f/omf1p0cmxe" target="_blank">Appka</a>
        </div>
      </div>
      <h2 >Moja práca</h2>
    
        <div>
          
            <a className="image-link" href="imgs/automat.png">
                <img  className="img-fluid" src="imgs/automat.png" alt="" /></a>
                
                <a className="image-link" href="imgs/SC1201.png">
                <img  className="img-fluid" src='imgs/SC1201.png' alt=""/></a>
          
                <a className="image-link" href="imgs/17.ý.png">
                <img  className="img-fluid" src="imgs/17.ý.png" alt=""/></a>
          
                <a className="image-link" href="imgs/TSS.XD app.png">
                <img  className="img-fluid" src="imgs/TSS.XD app.png" alt=""/></a>

                <a className="image-link" href="imgs/Code1.png">
                <img  className="img-fluid" src="imgs/Code1.png" alt=""/></a>
                </div>
    </div>
  );
}

export default App;
