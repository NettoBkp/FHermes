import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Slidedimg from './PageSliderImg';

class MySlid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            title: [],
            slogan: []
        }
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {
                indicators: true,
                height: 600
            });

        });
    }
    render() {
        const { datas } = (this.state);
        const { title } = (this.state);
        const { slogan } = (this.state);

        if (this.props.slideName === "inicial") {
            
            datas[0] = "https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg";
            title[0] = " Título Flores";
            slogan[0] = "Here's our small slogan.";
            datas[1] = "https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg";
            title[1] = " Título dois";
            slogan[1] = "Here's our small slogan.";
            datas[2] = "https://cdn1.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small slogan.";
            datas[3] = "https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/20566/image_191010_nature_PREV.jpg";
            title[3] = " Título 4";
            slogan[3] = "Here's our small slogan.";
            datas[4] = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg";
            title[4] = " Título 4";
            slogan[4] = "Here's our small slogan.";

        }
        if (this.props.slideName === "cats") {
            datas[0] = "http://lorempixel.com/output/cats-q-c-640-480-3.jpg";
            title[0] = " Título Flores";
            slogan[0] = "Here's our small slogan.";
            datas[1] = "http://lorempixel.com/output/cats-q-c-640-480-4.jpg";
            title[1] = " Título dois";
            slogan[1] = "Here's our small slogan.";
            datas[2] = "http://lorempixel.com/output/cats-q-c-640-480-1.jpg";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small slogan.";
            datas[3] = "http://lorempixel.com/output/cats-q-c-640-480-2.jpg";
            title[3] = " Título 4";
            slogan[3] = "Here's our small slogan.";
        }
        if (this.props.slideName === "city") {
            datas[0] = "http://lorempixel.com/1200/600/city/9/";
            title[0] = " Título Flores";
            slogan[0] = "Here's our small slogan.";
            datas[1] = "http://lorempixel.com/1200/600/city/5/";
            title[1] = " Título dois";
            slogan[1] = "Here's our small slogan.";
            datas[2] = "http://lorempixel.com/1200/600/city/4/";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small slogan.";
            datas[3] = "http://lorempixel.com/1200/600/city/3/";
            title[3] = " Título 4";
            slogan[3] = "Here's our small slogan.";
        }
        if (this.props.slideName === "transport") {
            datas[0] = "http://lorempixel.com/1200/600/transport/1/";
            title[0] = " Título Flores";
            slogan[0] = "Here's our small slogan.";
            datas[1] = "http://lorempixel.com/1200/600/transport/2/";
            title[1] = " Título dois";
            slogan[1] = "Here's our small slogan.";
            datas[2] = "http://lorempixel.com/1200/600/transport/3/";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small slogan.";
            datas[3] = "http://lorempixel.com/1200/600/transport/10/";
            title[3] = " Título 4";
            slogan[3] = "Here's our small slogan.";
            datas[4] = "http://lorempixel.com/1200/600/transport/5/";
            title[4] = " Título 5";
            slogan[4] = "Here's our five slogan.";
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="col s12 m12">
                        <div className={this.props.classNN}>
                            <ul className="slides materialboxed hoverable">
                                <Slidedimg classND="caption center-align blue-text text-darken-4" datas={datas[0]} title={title[0]} slogan={slogan[0]} />
                                <Slidedimg classND="caption left-align blue-text text-darken-4" datas={datas[1]} title={title[1]} slogan={slogan[1]} />
                                <Slidedimg classND="caption right-align black-text" datas={datas[2]} title={title[2]} slogan={slogan[2]} />
                                <Slidedimg classND="caption center-align light grey-text text-lighten-3" datas={datas[3]} title={title[3]} slogan={slogan[3]} />
                                <Slidedimg classND="caption right-align white-text" datas={datas[4]} title={title[4]} slogan={slogan[4]} />
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// foncionando as imagens n materialized
//<img class="materialboxed box17" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/580/250/nature/8"></img>
//<img class="materialboxed box17" width="650" src="https://lorempixel.com/580/250/nature/8"/>                          
//<iframe width="500" height="280" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>                    

export default MySlid;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;