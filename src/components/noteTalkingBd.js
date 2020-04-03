import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { AddNote } from '../servicos/AddNote';
import './login.css';
import NavBar from './navBar';
var classMut = "vazio";

class NTaking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      namesBd: [],      
    }
    this.addNote = this.addNote.bind(this);    
  }
  addNote(event) {
    console.log("working");
    if (this.theTitle.value !== "") {
      var newName = {
        name: this.theName.value,
        title: this.theTitle.value,
        note: this.theNote.value,
      };

      AddNote(newName).then((result) => {
        let ResponseJSON = result;
        console.log(ResponseJSON);
      });

    }
    this.setState((prevState) => {
      return {
        namesBd: prevState.namesBd.concat(newName)
      };
    });
    this.theName.value = "";
    this.theTitle.value = "";
    this.theNote.value = "";
    console.log(this.state.namesBd);
    event.preventDefault();
  }
  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      console.log('User Logged in');
      this.getNames();
    } else {
      this.setState({ redirect: true });
    }
  }
  getNames = _ => {
    fetch('http://localhost:3001/hermes/')
      .then(response => response.json())
      .then(response => this.setState({ namesBd: response.data }))
      .then(({ data }) => { console.log(data) })
      .catch(err => console.error(err))
  }  
  teste() {
    classMut = "box3";
    console.log(classMut);
    return (
      <Fragment>
        
      </Fragment>
    );
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    return (
      <Fragment>
        
          <header className="!box3">
            <NavBar />          
          </header>
          <div  className="CardA1">
          <div className="main-content">
            <ul>
              {this.state.namesBd.map((val) => <li><strong>{val.name}</strong><br />{val.title}<br />{val.note}</li>)}
            </ul>
          </div>
          <form
            className="box3"
            onSubmit={this.addNote}>
            <input
              type="text"
              required=" "
              placeholder="Digite o Nome"
              ref={(name) => this.theName = name}
            />
            <input              
              type="text"
              required=" "
              placeholder="Digite o título"
              ref={(title) => this.theTitle = title}
            />
            <textarea              
              type="text"
              placeholder="Digite a mensagem"
              ref={(note) => this.theNote = note}
            />
            <button  type="Mybutton">Enviar</button>
          </form>
          </div>        
      </Fragment>
    );
  }
}
export default NTaking;
//{this.state.items.map((val) => <li><strong>{val.title}</strong><br />{val.content}</li>)}
//              <button type="text" onClick={this.logout}>Sair</button>
//              <button type="text" onClick={this.teste}> Teste </button>
            