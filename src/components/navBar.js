import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import imaGemA from "../img/atomo5.gif";
import imaGemBk from "../img/fisica9.png";
import imaGemB from "../img/Einstein234.gif";

//import 'bootstrap/dist/css/bootstrap.min.css';
//import imaGem from "../img/google.png";
//<img src={imaGem} alt="React logo" min-width="560px" />
//import '../components/slide.css';
//<li><img src="https://img.icons8.com/color/144/000000/woody-woodpecker.png"></img></li>
//var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Toast</button>';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        //    console.log('logout');
        sessionStorage.setItem('userData', '');
        sessionStorage.clear();
        this.setState({ redirect: true });
    }

    componentDidMount() {
        if (sessionStorage.getItem('userData')) {
            //console.log('User Logged in');
        } else {
            this.setState({ redirect: true });
        }
        this.setState({});
        document.addEventListener('DOMContentLoaded', function () {
            var el = document.querySelectorAll('.target');
            var instance = M.Tabs.init(el, {});
            var elemsDrop = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elemsDrop, {

            });
            var elems = document.querySelectorAll('.sidenav');
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/5e7406c4eec7650c332149ae/1e3qmhts5';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
            var instances = M.Sidenav.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300
            });
        });
    }
    render() {
        return (
            <Fragment>     
                           
                <div id="header-holder">
                    <div id="">
                        <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

                        <ul id="dropdown1" className="dropdown-content">
                            <li><Link to="/docentes">Docentes</Link></li>
                            <li><a href="#!">Drop 2 </a></li>
                            <li><a href="#!">Drop 3</a></li>
                        </ul>

                        <nav className="nav-extended">
                            <div className="nav-wrapper blue darken-2">

                                <Link to="/" className="brand-logo">Física</Link>
                                <a href="/" data-target="mobile-demo" className="sidenav-trigger pulse"><i className="material-icons"><i className="material-icons">view_list</i></i></a>
                                
                                    <ul className="tabNav right hide-on-med-and-down" >
                                        <li className=""><Link to="/"><i className="material-icons">home</i></Link></li>
                                        <li className=""><Link to="/docentes"><i className="material-icons">school</i></Link></li>
                                        <li className=""><Link class="active" to="/talking"><i className="material-icons">forum</i></Link></li>
                                        <li className=""><Link to="/eventos"><i className="material-icons">event_note</i></Link></li>
                                        <li className=""><Link to="/utils"><i className="material-icons">settings</i></Link></li>
                                        <li><Link onClick={this.logout} to="/logout"><i className="material-icons">logout</i></Link></li>
                                        <img src={imaGemA} width="64px" ></img>
                                    </ul>
                                

                            </div>
                        </nav>

                        <ul className="sidenav blue lighten-4" id="mobile-demo">
                            <li>
                                <div className="user-view" >
                                    <div className="background">
                                        <img src={imaGemBk} width="250"></img><img src={imaGemA}></img>
                                    </div>
                                    <Link to="/"><img className="circle" src={imaGemB} width="64px" /></Link>
                                    <Link to="#name"><span className="CardB white-text name">CEFET | NF</span></Link>
                                    <Link to="http://www.cefet-rj.br/"><span className="CardB white-text email">Cefet-RJ</span></Link>
                                </div>
                            </li>
                            <li><Link to="/"><i className="material-icons">home</i>Início</Link></li>
                            <li><Link to="/docentes"><i className="material-icons">school</i>Docentes</Link></li>
                            <li><Link to="/talking"><i className="material-icons">comment</i>Conversa</Link></li>
                            <li><Link to="/eventos"><i className="material-icons">event_note</i>Eventos</Link></li>
                            <li><Link to="/utils"><i className="material-icons">settings</i>Útil</Link></li>
                            <li><Link onClick={this.logout} to="/logout"><i className="material-icons">logout</i>Sair</Link></li>
                        </ul>
                    </div>
                </div>                
            </Fragment>
        )
    }
};
//<li><a className='dropdown-trigger' href='#' data-target='dropdown1'><i className="material-icons">school</i></a></li> está funcionando o drop...
//{<iframe src="https://tawk.to/chat/5e7406c4eec7650c332149ae/default" width="100%" height="800" scrolling="yes" allowfullscreen></iframe>}
//<li class="divider blue-grey lighten-1"></li>
//insertBefore={this.myToast('<a className="box3"><span>I am toast content</span><button class="btn-flat toast-action">Toast</button></a>')}                         
export default NavBar;