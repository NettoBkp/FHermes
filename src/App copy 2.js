import React, { Component } from 'react';
import NTaking from './components/noteTaking';
import Login from './components/Login';
import Teste from './components/Teste';
import Slide from './components/slide';
import CardO from './components/cardO';
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
          <Route path="/taking" exact component={NTaking}></Route>
          <Route path="/tempo" exact component={TempoAgora}></Route>
          <Route path="/teste" exact component={Teste}></Route>
          <Route path="/slide" exact component={Slide}></Route>
          <Route path="/card" exact component={CardO}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
