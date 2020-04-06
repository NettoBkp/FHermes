import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/NTest.css';
import Tempo from '../components/TempoAgora';
import MyButton from '../components/MyButton';
import imaGemBt from "../img/cc3adrculo_trigonomc3a9trico.png";
import imaGemT from "../img/notaveis.png";
import M from 'materialize-css';

let userN = sessionStorage.getItem('userData');

var img = '';
class MyLabel extends Component {
    
    render() {
        return (
            <div class="o texto vai aqui em baixo">
                {this.props.text}                
            </div>
        )
    }
}
class MyPgArquivo extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            labelText: [                
            ],
            ClassN: "card-panel hoverable col s12 m12 min scale-transition ",            
            data: [],
            agenda: []
        }
        this.setClassName = this.setClassName.bind(this);
        this.setLabelText = this.setLabelText.bind(this);        
        this.myToast = this.myToast.bind(this);        
    }
    setClassName(ClassN){
        this.setState({ ClassN });       
    }
    setLabelText(labelText) {
        this.setState({ labelText });
    }
    componentDidMount() {        
        if (sessionStorage.getItem('userData')) {
            console.log(sessionStorage.getItem('username'));
        } else {
            this.setState({ redirect: true });
        }
    }
    myToast(toastHTML){        
        M.toast({html: toastHTML});        
    } 
    teste() {
        return (
            <Fragment>
                <header> Teste Ok </header>
            </Fragment>
        )
    }
    
    render() {
        const { data } = (this.state);        
        console.log(this.state);
        
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />);
        }
        return (
            <Fragment>
                    <link href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" rel="stylesheet"></link>              
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
                    <div  className="row">    
                                                             
                        <div className="card-panel hoverable col s12 box8 m12 scale-transition">                        
                        <MyButton handleClick={this.setLabelText} text={                    
                            <div>
                                <MyButton handleClick={this.setLabelText} icon="donut_large" label="Ângulos Notáveis"  type="text" text={<Fragment>Ângulos Notáveis<img width="100%" src={imaGemT} /></Fragment>} NClick={this.setClassName} nClass="box4 scale-transition scale-out" />
                                <MyButton handleClick={this.setLabelText} icon="radio_button_unchecked" label="Circulo Trigonométrico" type="text" text={<Fragment><h5>Circulo Trigonométrico</h5><img width="100%" src={imaGemBt} /></Fragment>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                
                                <MyButton handleClick={this.setLabelText} icon="timeline" label="Geo Gebra" text={<iframe className="box8" src="https://www.geogebra.org/graphing?lang=pt" width="100%" height="800" scrolling="yes" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                          
                                <MyButton handleClick={this.setLabelText} icon="functions" label="Razões Trigonométricas" text={<iframe className="box8" src="https://www.geogebra.org/m/mpsuktyw" width="100%" height="800" scrolling="yes" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                                                                          
                                
                            </div>                                                                                                               
                        } label="Tools" icon="build" NClick={this.setClassName} nClass="card-panel hoverable col s12 m12 minA scale-transition" />                        
                        
                        <MyButton handleClick={this.setLabelText} text={                    
                            <div>                                                                                    
                                <MyButton handleClick={this.setLabelText} icon="blur_circular" label="Campo Elétrico" text={<iframe className="box8" src="http://www.falstad.com/vector2de/" width="100%" height="600" scrolling="yes" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                
                                <MyButton handleClick={this.setLabelText} icon="call_merge" label="Força e Movimento" text={<iframe className="box8"  src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>}  NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                                                
                                <MyButton handleClick={this.setLabelText} icon="call_split"  label="Lei de equilíbrio" text={<iframe className="box8" src="https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />
                                <MyButton handleClick={this.setLabelText} icon="call_missed_outgoing" label="Movimento do Projétil"  text={<iframe className="box8" src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                
                                <MyButton handleClick={this.setLabelText} icon="compare_arrows"  label="myphysicslab" text={<iframe className="box8" src="https://www.myphysicslab.com/index-en.html" width="100%" height="600" scrolling="yes" allowfullscreen></iframe>} NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                                                
                                <MyButton handleClick={this.setLabelText} icon="all_inclusive"  label="Superposição de ondas" text={<iframe className="box8" src="http://www.falstad.com/dispersion/" width="100%" height="600" scrolling="yes" allowfullscreen></iframe>}  NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />                                                                                                                               
                                
                            </div>                                                                                                               
                        } label="Labs" icon="dashboard" NClick={this.setClassName} nClass="card-panel hoverable col s12 m12 minA scale-transition" />                        
                        <p/>
                        <MyLabel text={this.state.labelText} />
                        {this.state.username}
                    </div>    
                    </div>                                 
                
                <ul>{data.map(item => <li>{item.labelText}</li>)}</ul>
            </Fragment>
        )
    }
}
// <MyLabel text={this.state.labelText} />    pode ser colodaco porcima dos botoes
//<ul>{data.map(item => <li>{item.full_name}</li>)}</ul> depois de footer
//<MyButton handleClick={this.setLabelText} text={<Redirect to={'/talking'} />} label="NTaking" />
//<MyButton handleClick={this.setLabelText} text={<AlistaBd />} label="Lista" />  
export default MyPgArquivo;