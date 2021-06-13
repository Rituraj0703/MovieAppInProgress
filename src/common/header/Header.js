import React from 'react';
import './Header.css';
import Layer_1 from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';

const Header = function () {
    return (
        <div className="header">
            <img src = {Layer_1}
             className = "Logo" 
             alt = "logo"
             />

            <Button variant="contained" 
            style={{display: 'inline-block', justifyContent: 'flex-end', tabSize: 'lg'}} 
            color="default"
            >
                LOGIN
            </Button>

            {/* <nav>
                <Button variant="contained" color = "default">LOGIN</Button>
            </nav> */}
        </div>
    )
}



export default Header;