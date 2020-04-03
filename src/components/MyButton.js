import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class MyButton extends Component {
    render() {
        return (            
            <button
                className="inputBtn2"
                type="Mybutton"
                name="btn"                
                onFocus={() => { this.props.handleClick(this.props.text); }} 
                onClick={() => { this.props.NClick(this.props.nClass); }}                       
            >
               <i className="material-icons MyIcon3 md-30">{this.props.icon}</i> {this.props.label}
            </button>
            
        )
    }
}
export default MyButton;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;