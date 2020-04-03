import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import imaGemT from "../img/tenor.gif";

class MyButtonRnd extends Component {    
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instance = M.FloatingActionButton.getInstance(elems);            
            var instances = M.FloatingActionButton.init(elems, {
                direction: 'left',
                
                //toolbarEnabled: true,                
            });
        });
    }
    render() {
        
        return (
            
            <div className="CardN fixed-action-btn">
                <a className="btn-floating pulse btn-large blue">                    
                    <img className="circle" src={imaGemT} width="56px"></img>                    
                </a>
                <ul>
                    <li><a className="btn-floating red " href="#end" ><i className="material-icons">person_pin</i></a></li>
                    <li><a className="btn-floating yellow darken-1" href="#dada"><i className="material-icons">person_pin</i></a></li>
                    <li><a className="btn-floating black " href="#dani"><i className="material-icons">person_pin</i></a></li>
                    <li><a className="btn-floating blue darken-3" href="#"><i className="material-icons">arrow_drop_up</i></a></li>
                    <li><a className="btn-floating blue darken-4" href="#end" ><i className="material-icons">arrow_drop_down</i></a></li>
                    
                    
                    
                </ul>
            </div>
        )
    }
}
export default MyButtonRnd;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;