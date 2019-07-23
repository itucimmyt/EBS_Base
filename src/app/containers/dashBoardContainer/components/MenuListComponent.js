import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import BookIcon from '@material-ui/icons/Book';
import LanguageIcon from '@material-ui/icons/Language';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList({changeTab}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <PersonPinIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Language" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Catalogs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={() => { changeTab("catalog001");}} className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecord />
            </ListItemIcon>
            <ListItemText primary="Catalog 001" />
          </ListItem>
          <ListItem button onClick={() => {changeTab("catalog002")}} className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecord />
            </ListItemIcon>
            <ListItemText primary="Catalog 002" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
