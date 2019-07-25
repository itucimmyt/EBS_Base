import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet({entity001}) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography foo="bar" variant="h5" component="h3">
          This is your Catalog001 Component
        </Typography>
      </Paper>
    </div>
  );
}
