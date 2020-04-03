import React, { Component, Fragment } from 'react';
import imaGem from "../img/fisica1.png";
import '../components/slide.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import NavBar from '../components/navBar';
import Tempo from '../components/TempoAgora';
import MyCard from '../components/cardO';

// <a className="btn waves-effect white grey-text darken-text-2">button</a> .. pode ser colocado embaixo do segundo div
class Slide extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            // var elemsPara = document.querySelectorAll('.parallax'); descomente para usar paralax
            // var instances = M.Parallax.init(elemsPara, {});
            //<img src={imaGem} alt="React logo" /> está parte coloque no body
            //<div class="parallax-container">
            //<div class="parallax"><img src={imaGem} alt="React logo" /></div>
            //</div>
            var elems = document.querySelectorAll('.carousel');
            const instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300
            });
            console.log(instances)
        });
    }
    render() {
        return (
            <Fragment>
                <NavBar />
                <div class="container">
                    <div className="carousel carousel-slider center">
                        <div className="carousel-fixed-item center">
                        </div>
                        <div className="carousel-item box light-blue darken-4 white-text" href="#one!">
                        <div className="box">
                                <h2 className="box2 nav-wrapper blue darken-4">Primeiro Painel</h2>
                                <br />
                                Texto
                            </div>                       
                        </div>
                        <img src={imaGem} alt="React logo" min-width="560px" />
                        <div className="carousel-item  box indigo darken-4 white-text" href="#two!">
                            <div className="box">
                                <h2 className="box2 nav-wrapper light-blue darken-4">Tempo Agora</h2>
                                <br />
                                <Tempo />
                            </div>
                            <br/>
                        </div>
                        <div class="carousel-item box green white-text" href="#three!">
                        <div className="box">
                                <h2 className="box2 nav-wrapper teal darken-4">Card Modelo</h2>
                                <br />
                                <MyCard />
                            </div>
                            <p class="white-text">Verdinhas...</p>
                        </div>
                        <div class="carousel-item box blue white-text" href="#four!">
                        <div className="box">
                            <h2>Painel Azul</h2>
                            <p class="white-text">... azul painel...</p>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};
//<img src={imaGem} alt="React logo" min-width="560px" />
export default Slide;