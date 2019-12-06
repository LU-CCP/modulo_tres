import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

    [theme.breakpoints.down('md')]: {
      backgroundPosition: '25% 75%'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center'
    }
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '28vh'
  },
  button_random: {
    variant: 'contained',
    color: 'primary'
  },
  button_user: {
    variant: 'contained',
    color: 'secondary'
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default useStyles;
