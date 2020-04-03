import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { AddNote } from '../servicos/AddNote';
import './login.css';
import NavBar from './navBar';
import SlideShow from './slide';
var classMut = "vazio";

class NTaking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      redirect: false
    }
    this.addNote = this.addNote.bind(this);
    this.logout = this.logout.bind(this);
  }
  addNote(event) {
    console.log("working");
    if (this.theTitle.value !== "") {
      var newItem = {
        title: this.theTitle.value,
        content: this.theNote.value
      };

      AddNote(newItem).then((result) => {
        let ResponseJSON = result;
        console.log(ResponseJSON);
      });

    }
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.theNote.value = "";
    this.theTitle.value = "";
    console.log(this.state.items);
    event.preventDefault();
  }
  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      console.log('User Logged in');
    } else {
      this.setState({ redirect: true });
    }
  }
  logout() {
    //    console.log('logout');
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({ redirect: true });
  }
  teste() {
    classMut = "box2";
    console.log(classMut);
    return (
      <Fragment>
        <SlideShow />
      </Fragment>      
    );    
  }  

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    return (
      <Fragment>
        <div>
          <header className="headerTop"><NavBar />
            <div className="box2">
              <button type="text" onClick={this.logout}>Sair</button>
              <button type="text" onClick={this.teste}> Teste </button>
            </div>
          </header>
          <div className="main-content">
            <ul>
              {this.state.items.map((val) => <li><strong>{val.title}</strong><br />{val.content}</li>)}
            </ul>
          </div>
          <footer>
            <form
              className="box2"
              onSubmit={this.addNote}>
              <input
                type="text"
                required=" "
                placeholder="Digite o título"
                ref={(title) => this.theTitle = title}
              />
              <textarea
                placeholder="Digite a mensagem"
                ref={(note) => this.theNote = note}
              />
              <button className="btn waves-effect waves-teal" type="submit">Enviar</button>
            </form>
          </footer>
        </div>
      </Fragment>
    );
  }
}
export default NTaking;
