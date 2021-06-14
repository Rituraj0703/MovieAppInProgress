import React from 'react';
import './Header.css';
import Layer_1 from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';

const Header = function () {
    return (
        <div className="header">
            <div class="col-lg-6">
            <img src = {Layer_1}
             className = "Logo" 
             alt = "logo"
             align = "left"
             />
             </div>
             
             
             
             <div class="col-lg-1">
            <Button variant="contained" 
            style={{display: 'inline-block', justifyContent: 'right', float: 'right', tabSize: 'lg', align: 'right'}} 
            color="default"
            >
                LOGIN
            </Button>
            </div>

            {/* <nav>
                <Button variant="contained" color = "default">LOGIN</Button>
            </nav> */}
        </div>
    )
}



export default Header;