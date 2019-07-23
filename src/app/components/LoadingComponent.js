import React from "react";

//import Material ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LoadingIcon from "@material-ui/icons/HourglassEmpty";

const styles = {
  grid : {
    height: "65vh"
  },
  loadingIcon: {
    fontSize: "4em",
    animation: "rotation 2s infinite linear"
  }
}

class Loading extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Grid
      style={styles.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <LoadingIcon className="Loading-icon"/>
        <Typography style={{ padding: "15px" }} variant="h4">Loading...</Typography>
      </Grid>
    );
  }
}

export default Loading;
