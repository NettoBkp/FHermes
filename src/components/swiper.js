import React, { Component } from 'react';
import MSlide from './MySlider';
import '../components/slide.css';

class MyVd extends Component {

    render() {

        return (
            <body>
                <div>
                <MSlide slideName="inicial"  classNN="slider fullscreen minOn"/>
                </div>                
            </body>
        )
    }
}
export default MyVd;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;