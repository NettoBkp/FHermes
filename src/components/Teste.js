import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/NTest.css';
import NavBar from '../components/navBar';
import PgInicial from '../components/PageInicial';
import PgArquivo from '../components/PageArquivo';
import MyButton from '../components/MyButton';

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
class Teste extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            labelText: [
                <PgInicial/>
            ],
            ClassN: "card-panel hoverable col s12 m12 scale-transition ",            
            data: [],
            agenda: []
        }
        this.setClassName = this.setClassName.bind(this);
        this.setLabelText = this.setLabelText.bind(this);       
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
                <header>
                    <NavBar />
                </header>
                <div className="CardA">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
                    <div  className="box8 b8 hoverable">                                     
                        <div className="box3">
                        <MyButton handleClick={this.setLabelText} text={<PgInicial/>} label="Início" icon="home" NClick={this.setClassName} nClass="card-panel hoverable col s12 m12   scale-transition" />
                        <MyButton handleClick={this.setLabelText} text={<PgArquivo/>} label="Arquivo" icon="archive" NClick={this.setClassName} nClass="card-panel hoverable col s12 m12   scale-transition" />
                        <p/>
                        <MyLabel text={this.state.labelText} />
                        {this.state.username}
                    </div>    
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
export default Teste;