
import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import './RegistrationForm.css'

function RegistrationForm(props) {
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div class="fName">
                    <input type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="First Name"
                    />
                </div><br />

                <div class="lName">
                    <input type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Last Name"
                    />
                </div><br />

                <div class="regEmail">
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                </div><br />

                <div class="regPassword">
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div><br />

                <div class="regContact">
                    <input type="contact"
                        className="form-control"
                        id="contact"
                        placeholder="Contact No"
                    />
                </div><br /><br />

                <div class="but-primary">
                    <Button variant='contained'
                        type="submit"
                        className="button"
                        
                        
                    >
                        REGISTER
                </Button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;