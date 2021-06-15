
import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import './FindMoviesForm.css'

function FindMoviesForm(props) {
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div class="mName">
                    <input type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Movie Name"
                    />
                </div><br />

                <div class="genres">
                    <input type="name"
                        className="form-control"
                        id="genres"
                        aria-describedby="name"
                        placeholder="Genres"
                    />
                </div><br />

                <div class="artists">
                    <input type="name"
                        className="form-control"
                        id="artists"
                        aria-describedby="emailHelp"
                        placeholder="Artists"
                    />
                </div><br />

                <div class="datestart">
                    <input type="date"
                        className="form-control"
                        id="datestart"
                        placeholder="Release Date Start"
                    />
                </div><br />

                <div class="dateend">
                    <input type="date"
                        className="form-control"
                        id="dateend"
                        placeholder="Release Date End"
                    />
                </div><br /><br />

                <div class="but-primary">
                    <Button variant='contained'
                        type="submit"
                        className="button"
                        
                        
                    >
                        APPLY
                </Button>
                </div>
            </form>
        </div>
    )
}

export default FindMoviesForm;