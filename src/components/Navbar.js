
import Work from '@material-ui/icons/Work';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Face from '@material-ui/icons/Face';
import ImportantDevices from '@material-ui/icons/ImportantDevices';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import img from '../images/space.jpg';




function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    backgroundImage: `transparent`,
    marginTop: '-50px',
    zIndex: 1,
  },
  tabsIndicator: {
    backgroundColor: '#627290',
    height: '3px',
    width: '3px',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 30,
    color: 'white',
    fontWeight: '800',
    indicatorColor: 'white',
    transition: 'color 0.2s linear',
    webkitTransition: 'color 0.2s linear',
    mozTransition: 'color 0.2s linear',
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing.unit,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#627290',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#627290',
    },
    '&:focus': {
      color: '#627290',
    }
  },
  tabSelected: {},

});

class Navbar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            inkBarStyle={{background: 'white'}}
            centered
            classes={{ root: classes.tabsRoot, selected: classes.tabSelected, indicator: classes.tabsIndicator}}
          >
            <Tab 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="My Story" 
            />
            <Tab 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Work" 
              />
            <Tab 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Projects" 
            />
            <Tab 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Contact" 
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Four</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);