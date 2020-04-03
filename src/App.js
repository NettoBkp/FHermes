import React, { Component } from 'react';
import NTalking from './components/noteTalkingBd';
import Login from './components/Login';
import Teste from './components/Teste';
import Slide from './components/slide';
import Docentes from './components/docentes';
import loogout from './components/btnLogout';
import Eventos from './components/eventos';
import AlistaBd from './components/Alista';
import Utils from './components/utils';
import CardO from './components/cardO';
import mySwiper from './components/swiper';
import TempoAgora from './components/TempoAgora';
import './components/NTaking.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      
      <Router>
        
        <div className="hermes-app">
          <Route path="/" exact component={Teste}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/talking" exact component={NTalking}></Route>
          <Route path="/tempo" exact component={TempoAgora}></Route>
          <Route path="/teste" exact component={Teste}></Route>
          <Route path="/slide" exact component={Slide}></Route>          
          <Route path="/card" exact component={CardO}></Route>
          <Route path="/list" exact component={AlistaBd}></Route>          
          <Route path="/docentes" exact component={Docentes}></Route>          
          <Route path="/logout" exact component={loogout}></Route>          
          <Route path="/utils" exact component={Utils}></Route>          
          
          <Route path="/eventos" exact component={Eventos}></Route>          
          <Route path="/swiper" exact component={mySwiper}></Route>
        </div>
      </Router>
    );
  }
}


export default App;
