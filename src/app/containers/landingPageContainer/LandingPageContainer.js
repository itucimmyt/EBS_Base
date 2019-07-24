import React from "react";

//import Material UI
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';

//import assets
import Logo from "../../../../assets/images/reactLogo.png";

//import components
import BreadCrumbsComponent from "./components/BreadCrumbsComponent";

const styles = {
    grid : {
        height :"100vh"
    },
    gridCenter : {
        textAlign : "center"
    }
}

class LandingPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            style = {styles.grid}
            >
              <Grid 
              item 
              xs={6}
              style={styles.gridCenter}
              >
                    <img src={Logo} className={"reactLogo"}/>
              </Grid>
              <Grid item xs={6}>
                <BreadCrumbsComponent
                    changeTab = {this.props.changeTab}
                />
              </Grid>
            </Grid>
        );
    }
}

export default LandingPageComponent;
