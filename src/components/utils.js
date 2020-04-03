import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './navBar';
import Tempo from './TempoAgora';
import MySelect from './MySelect';

class Utils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
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
  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    return (
      <Fragment>
        <header>
          <NavBar />
        </header>
        <body className="tc card-panel hoverable">          
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
          <div className="card-panel hoverable">
            <MySelect prof="Agenda" rotulo="2020.1" icon="date_range"/>
            <div className="tc card-panel hoverable">
              <h5>Links Úteis</h5>            
            <a className="material-link blue300"  href="https://twitter.com/cefet_rj" ><img className="circle" width="25" src="" /><i className="material-icons md-24">web</i>Twitter </a>
             | 
            <a className="material-link blue300"  href="http://facebook.com/cefetrjoficial" ><img className="circle" width="25" src="" /><i className="material-icons md-24">book</i>Facebook </a>
             | 
            <a className="material-link blue300" href="https://instagram.com/cefet_rj/" ><img className="circle" width="25" src=""/><i className="material-icons md-24">touch_app</i>Instagram </a>            
            </div>
            <p/>
            <Tempo />
          </div>
        </body>
      </Fragment>
    );
  }

}
export default Utils;