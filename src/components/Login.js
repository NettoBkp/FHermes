import React, { Component, Fragment } from 'react';
import { PostData } from '../servicos/PostData';
import { Redirect } from 'react-router-dom';
import './login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
       // console.log(this.state);
        PostData(this.state).then((result) => {
            let responseJSON = result;
            //console.log(responseJSON);
            if (responseJSON.token) {
                sessionStorage.setItem('userData', responseJSON.token);
                this.setState({ redirect: true });
            }
            else {
                console.log('Login Error!');
                return (
                    <footer>
                        <p>Senha não confere.</p>
                    </footer>
                )
            }
        })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        //  console.log(this.state);
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/'} />);
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/'} />);
        }

        return (
            <Fragment>                
                <div>
                    <body>
                        <div>
                            <form className="box">
                                <h2> Conecte-se </h2>
                                <br/>
                                <div className="inputBox">
                                    <input type="text" name="username" required="" onChange={this.onChange} />
                                    <label>Usuário: </label>
                                </div>
                                <br/>
                                <div className="inputBox">
                                    <input className="MyBt" type="password" name="password" onChange={this.onChange} />
                                    <label>Senha: </label>
                                </div>
                                <input className="light-blue darken-4" type="button" name="login" onClick={this.login} value="Entrar" />
                            </form>
                        </div>
                    </body>                   
                </div>                
            </Fragment>

        );
    }
}
export default Login;
