import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Language from '@material-ui/icons/Language';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  button: {
      margin: 10
  }
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs({changeTab}) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="Breadcrumb">
        <Link color="inherit" onClick={() => changeTab("dashboard")} className={classes.link}>
            Dashboard 
        </Link>
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            Visits 
        </Link>
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            Experts
        </Link>
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            Services
        </Link>
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            Contact
        </Link>
        <Link>
            <Language/>
        </Link>
      </Breadcrumbs>
      <br></br>
      <br></br>
      <Typography variant="h3">
      BASE PROJECT
      </Typography>
      <br></br>
      <br></br>
      <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <br></br>
      <br></br>
      <Button className={classes.button} variant="outlined" color="primary">Login</Button>
      <Button className={classes.button} variant="outlined" color="secondary">Sign up</Button>
    </Paper>
  );
}
