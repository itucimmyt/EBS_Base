import React from "react";

//import Material UI components
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography"

//import Components
import MicrosoftLoginComponent from "./microsoftLogin/microsoftLogin";
import Auth0LoginComponent from "./auth0Login/auth0LoginComponent";

//import assets
import { DialogContentText } from "@material-ui/core";

const styles = {
  logo: {
    height: 100
  },
  dialog : {
    textAlign: "center"
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default props => {

  const microsoftAuthHandler = (err, data) => {
    console.log(err, data);
  }

  const auth0AuthHandler = (user) => {
    console.log(user);
  }

  return (
    <React.Fragment>
        <DialogTitle>
          <Typography variant="h4">Base project Application</Typography>
          <Typography variant="h5">Log in</Typography>
        </DialogTitle>
        <DialogContentText>
          Please select an option to login to the application
        </DialogContentText>
        <DialogContent>
          <MicrosoftLoginComponent
            authHandler = {microsoftAuthHandler}
          />
          <br></br>
          <Auth0LoginComponent
            authHandler = {auth0AuthHandler}
          />
          <br></br>
        </DialogContent>
    </React.Fragment>
  )
}
