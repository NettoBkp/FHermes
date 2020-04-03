class MyButton extends Component {
    render() {
        return (
            <button
                className="inputBox2"
                type="Mybutton"
                name="btn"
                onClick={() => { this.props.handleClick(this.props.text); }}
            >
                {this.props.label}
            </button>
        )
    }
}
export default MyButton;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;