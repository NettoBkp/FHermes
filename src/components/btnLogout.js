import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './NTest.css';

class btnLogout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            volta: false
        }
        this.logout = this.logout.bind(this);
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
    voltar() {
        //this.setState({ volta: true });
        //console.log('volta');        
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />);
        }
        return (
            <Fragment>
                <div className="MyBt">
                    <button className="inputBtn" type="text" onClick={this.logout}>Sair</button>
                    <button className="inputBtn" type="text" onClick={this.voltar}>Voltar</button>
                </div>
            </Fragment>
        );
    }
}
export default btnLogout;