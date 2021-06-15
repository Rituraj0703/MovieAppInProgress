// import React from 'react';
// import './FindMovies.css';

// const FindMovies = function () {
//     return (
//         <div className="findmovies">
//             Find movies
//         </div>
//     )
// }



// export default FindMovies;


// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";

// export default function FindMovies() {
//     return (
//       <div stlye={{}}>
//         {/* <h4>How to use CardComponent in ReactJS?</h4> */}
//         <Card
//           style={{
//             width: 400,
//             backgroundColor: "grey",
//             alignContent: "center",
//             flex: "center"
//           }}
//         >
//           <CardContent>
//             <Typography
//               style={{ fontSize: 16 }}
//               color="textSecondary"
//               gutterBottom
//             >
//               Greetings of the day
//             </Typography>
//             <Typography variant="h5" component="h2">
//               How are you ?
//             </Typography>
//             <Typography
//               style={{
//                 marginBottom: 12,
//               }}
//               color="textSecondary"
//             >
//               Keep Motivated
//             </Typography>
//             <Typography variant="body2" component="p">
//               Stay Happy
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Stay Safe.....</Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }


import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const FindMovies = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FindMovies;