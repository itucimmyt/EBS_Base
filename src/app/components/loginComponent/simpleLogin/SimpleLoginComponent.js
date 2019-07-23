import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0),
  }
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <TextField
        id="outlined-email-input"
        label="Username"
        className={classes.textField}
        name="username"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}
