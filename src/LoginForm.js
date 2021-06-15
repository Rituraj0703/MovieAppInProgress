
//import { Button } from 'bootstrap';
import React, { Component, useState } from 'react';
import './LoginForm.css'
import Button from '@material-ui/core/Button';

function LoginForm(props) {
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div class="loginName">
                    <input type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Username"
                    />
                </div><br /><br />

              

                <div class="loginPassword">
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div><br /><br /><br />

               

                <div class="but-primary">
                    <Button variant="contained"
                        type="login"
                        className="button"
                        
                        
                        
                    >
                        LOGIN
                </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;