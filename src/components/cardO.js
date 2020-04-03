import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class CardO extends Component {
    render() {
        return (
            <Fragment>                
                <div className="col s12 m8 offset-m2 l6 offset-l3" >
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2">
                                <img src="https://res.cloudinary.com/teepublic/image/private/s--1EeNyaeq--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1552433147/production/designs/4399175_1.jpg" alt="" class="circle responsive-img" />
                            </div>
                            <div className="col s10 ">
                                <span className="black-text">
                                    Este card está com bug!
                                    <br/>
                                    Tem que arrumar as className
                                    <br/>
                                    Add the "circle" class to it to make it appear circular.
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