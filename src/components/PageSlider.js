import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import MSlide from './MySlider';
import MyIm from './MyImg';

class MyVd extends Component {

    render() {
        return (
            <body className="row">
                <div className="col s10 m10">
                    <MSlide slideName="transport" classNN="slider" />                    
                </div>
                <div className="col s2 m2">
                <MyIm imgName="inicial" />                
                </div>
            </body>
        )
    }
}
export default MyVd;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;