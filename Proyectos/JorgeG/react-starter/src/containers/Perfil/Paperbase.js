import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

// import Tarjeta from '../Tarjeta/Tarjeta';
// import DatosPersonales from '../DatosPersonales/DatosPersonales';
// import useOpcion from '../../hooks/useOpcion';
// import { TARJETA } from '../../routes/paths';

import Navigator from './Navigator';
import Header from './Header';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
        marginTop: '48px'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none'
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1)
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
        backgroundColor: 'red'
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  }
};

const drawerWidth = 200;
const styles = {
  root: {
    display: 'flex',
    minHeight: '0vh'
  },
  drawer: {
    [theme.breakpoints.up('xs')]: {
      width: 800,
      flexShrink: 0,
      marginTop: '50px',
      marginRight: 300
    },
    [theme.breakpoints.down('xs')]: {
      width: 800,
      flexShrink: 0,
      marginTop: '50px',
      marginRight: 300
    }
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    padding: theme.spacing(5, 5),
    background: '#eaeff1'
  }
};

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <nav>
          <Header onDrawerToggle={handleDrawerToggle} />
        </nav>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation='js'>
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation='css'>
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div>
            {/* <Tarjeta onDrawerToggle={handleDrawerToggle} /> */}

            {/* /* {<Tarjeta onDrawerToggle={handleDrawerToggle} />} */}

            {/* <main className={classes.main}>{}</main> */}
          </div>
        </div>
      </ThemeProvider>
    </Container>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Paperbase);
