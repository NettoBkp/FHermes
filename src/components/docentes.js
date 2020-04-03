import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/slide.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from '../components/navBar';
import CardO from '../components/cardO';

class Docentes extends Component{
    constructor(props) {
        super(props);
        this.state = {                         
        }                
      }
      componentDidMount() {
        if (sessionStorage.getItem('userData')) {
          console.log('User Logged in');
        } else {
          this.setState({ redirect: true });
        }
      }      
    render() {      
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />);
          }
        return(
            <Fragment>
                <header>                  
                    <NavBar/>                    
                </header>
                <a id="topo"/>
                <div className="CardB">                
                    <CardO/>                                         
                </div>
                <a id="end"/>
            </Fragment>            
        );
    }
}
//<button type="text" onClick={this.logout}>Sair</button>
export default Docentes;