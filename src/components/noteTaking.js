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
        <div>        
        <iframe className="box8" src="https://nchathermes.herokuapp.com/" width="100%" height="700" scrolling="yes" allowfullscreen></iframe>
        </div>
      </Fragment>
    );
  }
}
export default NTaking;
