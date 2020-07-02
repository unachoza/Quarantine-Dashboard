import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import CameraSharpIcon from '@material-ui/icons/CameraSharp';
import WatchIcon from '@material-ui/icons/Watch';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import MailIcon from '@material-ui/icons/Mail';
import CustomButton from 'Components/CustomButton/Button.component';
import { USER } from 'Constants/User.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {},
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
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
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
            Quarantine Dashboard
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
        <Divider />
        <List>
          {IconObjectArray.map((object, i) => (
            <Button className={classes.root} fullWidth variant="contained" key={i}>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.buttonName} />
            </Button>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div style={{ fontSize: '60px', textAlign: 'center', marginTop: '60px' }}>{USER.name}'s Dashboard</div>
        <div className={classes.toolbar} />
        <Typography paragraph>Some text, but not too much text; just a reasonable amount.</Typography>
        <Typography paragraph>Some text, but not too much text; just a reasonable amount.</Typography>
      </main>
    </div>
  );
}

const buttonCreateListTypes = [
  'Create a Todo List',
  'Make a Goals List',
  'Send email',
  'Drafts',
  'more',
  'of',
  'these ',
];
const buttonIcons = [
  'RecieptIcon',
  'BatteryChargingFullIcon',
  'HourglassEmptyIcon',
  'AspectRatioIcon',
  'WatchIcon',
  'CameraSharpIcon',
];
const IconObjectArray = [
  {
    icon: <ReceiptIcon />,
    buttonName: 'Create a Todo List',
  },
  {
    icon: <BatteryChargingFullIcon />,
    buttonName: 'Make a Goals List',
  },
  {
    icon: <HourglassEmptyIcon />,
    buttonName: 'Countdown',
  },
  {
    icon: <AspectRatioIcon />,
    buttonName: 'Stufff',
  },
  {
    icon: <WatchIcon />,
    buttonName: 'Import Dates',
  },
  {
    icon: <CameraSharpIcon />,
    buttonName: 'News',
  },
];
