import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import MSlide from './MySlider';
import MyIm from './MyImg';

class MyPgInicial extends Component {

    render() {
        return (
            <Fragment>
                <div className="element2">
                </div>
                <div className="txt">
                    A Física é uma ciência básica que explica as diversas formas de interação entre matéria e energia.
                    <p/>
                    Quando se estuda Física, principalmente na escola, a ideia que normalmente se tem é que nem tudo o que é aprendido realmente tem alguma utilidade prática. No entanto, muito do que é visto como idealização de modelos, tem grande aplicação no dia a dia, desde as atividades físicas que realizamos até os equipamentos sofistica dos que carregamos, como os telefones celulares e relógios.
                </div>
            </Fragment>
        )
    }
}
export default MyPgInicial;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;