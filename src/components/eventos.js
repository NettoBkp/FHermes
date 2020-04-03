import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/slide.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './navBar';
import SlideEventos from './PageSlider';

class Evento extends Component {
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
        <body>                                    
            <SlideEventos />                     
        </body>
      </Fragment>
    );
  }

}
export default Evento;