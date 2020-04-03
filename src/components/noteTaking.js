import React, { Component, Fragment } from 'react';
import './login.css';
import NavBar from './navBar';

class NTaking extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <NavBar />
        </header>
        <div className="box8" >        
        <iframe src="https://nchathermes.herokuapp.com/" width="100%" height="600" scrolling="yes" allowfullscreen></iframe>
        </div>
      </Fragment>
    );
  }
}
export default NTaking;
