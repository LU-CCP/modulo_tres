import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '25% 75%'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  users: {
    color: 'white',
    backgroundColor: '#C30B42',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  random: {
    backgroundColor: '#6C90F7',
    marginRight: '10px',
    color: 'white'
  }
}));

export default useStyles;
