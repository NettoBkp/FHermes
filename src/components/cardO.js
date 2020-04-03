import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import MyButtonRnd from './MyButtonRnd';
import MySelect from './MySelect';
import docPdf1 from "../doc/Calend_2020-01_GA__.pdf";
import docPdf2 from "../doc/Matematica.pdf";
import docPdf3 from "../doc/Listas.pdf";
import docPdf4 from "../doc/Livro_GA_Winterle.pdf";

class CardO extends Component {       
    render() {                     
        return (
            <Fragment>         
                <MyButtonRnd />                  
                <div id="dani" className="CardA col s12 m8 offset-m2 l6 offset-l3" >
                    <div className="card-panel CardD z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2 m2">
                                <img src="https://yt3.ggpht.com/a/AATXAJx1WggMPlaU-jpUQNOeUIQOFWKOefiOj0AU-Q=s288-c-k-c0xffffffff-no-rj-mo" alt="" className="circle responsive-img MyIcon2" />
                                <br/>
                                <br/>
                                <p/> 
                            </div>
                            <div className="col s10 m10 ">
                                <span className="black-text">
                                    <h4 textarea="">Professor Daniel - GA</h4>                                                                                                               
                                    <MySelect prof='Daniel' rotulo="Data - Provas"  icon="date_range"/>
                                    <br/>                                    
                                    <h5><a href={docPdf4}><i className="material-icons darken md-30">library_books</i></a> Material didático<a href={docPdf1}><i className="material-icons blue300 md-30">picture_as_pdf</i></a>2020.1</h5>                                    
                                    <h6><a href={docPdf4}><i className="material-icons blue300">library_add</i></a>Vetores e Geometria Analítica - Paulo Winterle</h6>                                                                        
                                    <a className="material-link blue300" href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q" ><i className="material-icons">ondemand_video</i>Canal YouTube</a>
                                    <a className="material-link blue300" href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">settings_system_daydream</i>Home Page</a>
                                    <a className="material-link blue300" href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">mail_outline</i>Home Page</a>
                                </span>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div id="dada" className="CardA col s12 m8 offset-m2 l6 offset-l3" >
                    <div className="card-panel CardD z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2 m2">
                                <img src="https://3.bp.blogspot.com/-7CFiPgIsNU4/VqfYYNPjHHI/AAAAAAAAD7Q/wM_Sgq7xiZU/s1600/PRECALC.png" alt="" className="circle responsive-img MyIcon2" />                                                              
                                <br/>
                                <br/>
                                <p/>                                                                                                                              
                            </div>                              
                            <div className="col s10 m10">
                                <span className="black-text">
                                    <h4>Professora Danielle - Pré-Cálculo</h4>                                                                        
                                    <MySelect prof='Danielle' rotulo='Data - Provas' icon="date_range"/>
                                    <br/>
                                    <h5><a href={docPdf2}><i className="material-icons darken md-30">library_books</i></a> Material didático<a href={docPdf3}><i className="material-icons blue300 md-30">library_books</i></a> Lista | Gabarito</h5>
                                    <h6><i className="material-icons blue300">library_add</i>Lista / Gabarito</h6>                                                                        
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">ondemand_video</i>Canal YouTube</a>
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">settings_system_daydream</i>Home Page</a>
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">mail_outline</i>Home Page</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="si" className="CardA col s12 m8 offset-m2 l6 offset-l3" >
                    <div className="card-panel CardD z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2">
                                <img src="https://infopt.examtime.com/files/2014/03/keep-calm-e-vai-estudar-portugu%C3%AAs.png" alt="" className="circle responsive-img MyIcon2" />
                                <br/>
                                <br/>
                                <p/> 
                            </div>
                            <div className="col s10 m10">
                                <span className="black-text">
                                    <h4>Professora Simone - Top. Linguagem II</h4>
                                    <MySelect prof='Simone' rotulo='Trabalhos - Provas'  icon="date_range"/>
                                    <br/>
                                    <h5><i className="material-icons darken md-30">library_books</i> Material didático</h5>                                    
                                    
                                    <h6><i className="material-icons blue300">library_add</i>Lista / Gabarito</h6>                                                                        
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">ondemand_video</i>Canal YouTube</a>
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">settings_system_daydream</i>Home Page</a>
                                    <a href="https://www.youtube.com/channel/UCt5QdEuPyd-X8pA0K7LHa0Q"><i className="material-icons">mail_outline</i>Home Page</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Fragment>
        );
    }
};

export default CardO;