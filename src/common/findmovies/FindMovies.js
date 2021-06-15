


import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FindMoviesForm from './FindMoviesForm';

export default function FindMovies() {
    return (
      <div stlye={{}}>
        <Card
          style={{
            width: 500,
            height: 445,
            backgroundColor: "grey",
            alignContent: "center",
            flex: "center"
          }}
        >
          <CardContent>
          <h4>FIND MOVIES BY: </h4><br /><br />
           

            <div>
            <FindMoviesForm />
             </div>

          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      </div>
    );
  }
