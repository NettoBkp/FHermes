import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import img1 from '../img/Atletica.jpg';

class MyImage extends Component {
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
            var elemsBox = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elemsBox, {
                inDuration: 500,
                outDuration: 300
            });
        });
    }
    render() {
        const { datas } = (this.state);
        const { title } = (this.state);
        const { slogan } = (this.state);

        if (this.props.imgName === "inicial") {

            datas[0] = `${img1}`;
            title[0] = " Atlética";
            slogan[0] = "ALCATEIA ATLÉTICA CEFET - NF";
            datas[1] = "https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg";
            title[1] = " Título dois";
            slogan[1] = "Here's our small slogan.";
            datas[2] = "https://cdn1.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small slogan.";
            datas[3] = "https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/20566/image_191010_nature_PREV.jpg";
            title[3] = " Título 4";
            slogan[3] = "Here's our small slogan.";
            datas[4] = "https://usgraceforce.com/wp-content/uploads/2019/08/NFONAmericaDay2.jpg";
            title[4] = " Título 4";
            slogan[4] = "Here's our small slogan.";


        }
        if (this.props.imgName === "cats") {
            datas[0] = "http://lorempixel.com/output/cats-q-c-640-480-3.jpg";
            title[0] = " Título Cats 1";
            slogan[0] = "Here's our small slogan Cats 1.";
            datas[1] = "http://lorempixel.com/output/cats-q-c-640-480-4.jpg";
            title[1] = " Título Cats dois";
            slogan[1] = "Here's our small slogan Cats 2.";
            datas[2] = "http://lorempixel.com/output/cats-q-c-640-480-1.jpg";
            title[2] = " Título Cats tr3s";
            slogan[2] = "Here's our small slogan Cats 3.";
            datas[3] = "http://lorempixel.com/output/cats-q-c-640-480-2.jpg";
            title[3] = " Título Cats 4";
            slogan[3] = "Here's our small slogan Cats 4.";
        }
        if (this.props.imgName === "city") {
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
        if (this.props.imgName === "transport") {
            datas[0] = "http://lorempixel.com/1200/600/transport/1/";
            title[0] = " Título Flores";
            slogan[0] = "Transporte 001 slogan.";
            datas[1] = "http://lorempixel.com/1200/600/transport/2/";
            title[1] = " Título dois";
            slogan[1] = "Transporte 002 slogan.";
            datas[2] = "http://lorempixel.com/1200/600/transport/3/";
            title[2] = " Título tr3s";
            slogan[2] = "Here's our small transporte 3 slogan.";
            datas[3] = "http://lorempixel.com/1200/600/transport/9/";
            title[3] = " Título 4";
            slogan[3] = "A picture of a way with a group of trees in a park";
        }
        return (
            <Fragment>
                <div className=" minC">
                <img className="materialboxed responsive-img " data-caption={slogan[0]} width="250" src={datas[0]}></img>                
                <img className="materialboxed responsive-img " data-caption={slogan[1]} width="250" src={datas[1]}></img>
                <img className="materialboxed responsive-img " data-caption={slogan[2]} width="250" src={datas[2]}></img>
                <img className="materialboxed responsive-img " data-caption={slogan[3]} width="250" src={datas[3]}></img>
                <img className="materialboxed responsive-img " data-caption={slogan[4]} width="250" src={datas[4]}></img>
                <img className="materialboxed responsive-img " data-caption={slogan[1]} width="250" src={datas[1]}></img>                                
                </div>
            </Fragment>
        )
    }
}

// foncionando as imagens n materialized
//<img class="materialboxed box17" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/580/250/nature/8"></img>
//<img class="materialboxed box17" width="650" src="https://lorempixel.com/580/250/nature/8"/>                          
//<iframe width="500" height="280" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>                    

export default MyImage;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;