import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class MyPgImg extends Component {

    render() {
        return (
            <li>
                <img src={this.props.datas} />
                <div className={this.props.classND}>
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.slogan}</h5>
                </div>
            </li>
        )
    }
}
export default MyPgImg;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;