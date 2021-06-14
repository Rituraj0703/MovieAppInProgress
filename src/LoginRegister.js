import React, {Component} from 'react';
//import Header from "./common/header/Header";
import './LoginRegister.css';

class LoginRegister extends Component {
    render () {
        return (
            <div>
                Login / Register <br />
                <button>Back</button>
                <form className="login-form">
                    <label htmlFor="name" className="label-control">FirstName: </label><br />
                    <input id="name" type="text" className="input-control" name="name" /><br /><br />
                    <label htmlFor="name" className="label-control">LastName: </label><br />
                    <input id="name" type="text" className="input-control" name="name" /><br /><br />
                  
                </form>
            </div>
        );
    }
}

export default LoginRegister;