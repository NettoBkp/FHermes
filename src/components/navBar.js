import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import imaGem1 from "../img/fisica1.png";
//import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAs from '../components/logoAS';
//import imaGem from "../img/google.png";
//<img src={imaGem} alt="React logo" min-width="560px" />
//import '../components/slide.css';
//<li><img src="https://img.icons8.com/color/144/000000/woody-woodpecker.png"></img></li>
class NavBar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});                       
            console.log(instances)
        });
        
    }
    render() {
        return (            
            <Fragment>                
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <nav>
                    <div className="nav-wrapper light-blue darken-4">
                        <a href="/#" className="brand-logo"><LogoAs/></a>                        
                        <a href="/#" data-target="mobile-demo" className="sidenav-trigger pulse"><i className="material-icons"><i class="material-icons">view_list</i></i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Início</a></li>
                            <img src={imaGem1}></img>
                            <li><a href="/taking">Conversa</a></li>
                            <li><a href="/tempo">Tempo Agora</a></li>                            
                            <li><a href="/slide">Slide Show</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav light-blue accent-4" id="mobile-demo">                    
                    <li><img src="https://img.icons8.com/color/120/000000/teacher.png"></img></li>
                    <li><a href="/"><i class="material-icons">beach_access</i>Início</a></li>
                    <li><a href="/taking"><i class="material-icons">eco</i>Conversa</a></li>
                    <li><a href="/tempo"><i class="material-icons">credit_card</i>Tempo Agora</a></li>
                    <li><a href="/slide"><i class="material-icons">person</i>Slide Show</a></li>                                                         
                </ul>                
            </Fragment>
            
        )
    }
};

export default NavBar;