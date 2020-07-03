import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SimpleModal from 'Components/SimpleModal/Modal.component';
import Main from 'Pages/Main/Main.page.js';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import { USER } from 'Constants/User.js';
import { IconObjectArray } from 'Constants/Styling.js';

const drawerWidth = 259;

const useStyles = makeStyles((theme) => ({
  root: {
    ul: {
      border: 'none',
    },
    display: 'flex',
    '& > *': {},
  },
  appBar: {
    backgroundColor: 'blue',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: 'blue',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    border: 'none',
    backgroundColor: 'blue',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    border: 'none',
    backgroundColor: 'blue',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    // backgroundColor: primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    toolbar:
      // necessary for content to be below app bar
      { ...theme.mixins.toolbar },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    margin: '30px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  theseButtons: {
    height: '50px',
  },
  list: {
    border: 'none',
    paddingTop: '20px',
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
    console.log('i was clicked');
  };

  const handleClose = () => {
    setOpenModal(false);
    console.log(openModal);
    console.log('i was clicked');
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const makeList = (e) => {
    console.log('clicking make a list', e);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Quarantine Dashboard !!!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List className={classes.list}>
          {IconObjectArray.map((object, i) => (
            <Button onClick={handleOpenModal} className={classes.root} fullWidth variant="contained" key={i}>
              <ListItemIcon onClick={handleOpenModal}>{object.icon}</ListItemIcon>
              <ListItemText primary={object.buttonName} />
            </Button>
          ))}
          <SimpleModal openModal={openModal} handleClose={handleClose} />
        </List>
      </Drawer>

      {/* ////////////EVERYTHING HAPPENS HERE//// */}

      <main className={classes.content}>
        <Main />
      </main>
      {/* ///////////////EVERYTHING HAPPENS HERE//////////// */}
    </div>
  );
}
