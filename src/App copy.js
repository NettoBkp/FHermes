import React, { Component } from 'react';
import NTaking from './components/noteTaking';
import Login from './components/Login';
import Teste from './components/Teste';
import Slide from './components/slide';
import TempoAgora from './components/TempoAgora';
import './components/NTaking.css';
import { BrowserRouter, Router, Switch, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { isAuthenticated } from "./components/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
);
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/login" exact component={Login} />
      <Route path="/login" exact component={() => <h1> Hello </h1>} />
      <PrivateRoute path="/app" component={() => <h1>Logado</h1>} />
      <PrivateRoute path="/teste" exact component={Teste} />
      <PrivateRoute path="/tempo" exact component={TempoAgora} />
      <PrivateRoute path="/slide" exact component={Slide} />
    </Switch>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hermes-app">
          <Route path="/" exact component={NTaking}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/teste" exact component={Teste}></Route>
          <Route path="/tempo" exact component={TempoAgora}></Route>
          <Route path="/slide" exact component={Slide}></Route>
        </div>
      </Router>
    );
  }
}

export default Routes;