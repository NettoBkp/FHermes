import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/NTest.css';    
import NavBar from '../components/navBar';
import Tempo from '../components/TempoAgora';
import AlistaBd from '../components/Alista';

class MyButton extends Component {
    render() {
        return (
            <button
                className="inputBox2 light-blue darken-4"
                type="Mybutton"
                name="btn"
                onClick={() => { this.props.handleClick(this.props.text); }}
            >
                {this.props.label}
            </button>
        )
    }
}

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
            redirect: false,
            labelText: '',
            data: []
        }
        this.setLabelText = this.setLabelText.bind(this);
        this.logout = this.logout.bind(this);
    }

    setLabelText(labelText) {
        this.setState({ labelText });
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
        return(
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
                    <NavBar/>                    
                </header>                
                <body className="box">
                    <div>                        
                        <MyButton handleClick={this.setLabelText} type="text" text="Art System Ti" label="Botão 1" />
                        <MyButton handleClick={this.setLabelText} text="Domingos Netto" label="Botão 2" />
                        <MyButton handleClick={this.setLabelText} text="" label="Botão 3" />
                        <MyButton handleClick={this.setLabelText} text={<Redirect to={'/taking'} />} label="NTaking" />
                        <MyButton handleClick={this.setLabelText} text={<Tempo/>} label="tp" />
                        <MyButton handleClick={this.setLabelText} text={<AlistaBd/>} label="Lista" />
                        <MyLabel text={this.state.labelText} />                                                                      
                    </div>                                        
                </body>
                
                                                           
                        <ul>{data.map(item => <li>{item.full_name}</li>)}</ul>
                    
            </Fragment>
        )
    }
}
// <MyLabel text={this.state.labelText} />    pode ser colodaco porcima dos botoes
//<ul>{data.map(item => <li>{item.full_name}</li>)}</ul> depois de footer
export default Teste;