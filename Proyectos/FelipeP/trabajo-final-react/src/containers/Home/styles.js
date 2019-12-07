import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    color: '#FFF'
  },
  button: {
    margin: theme.spacing(1)
  },
  univ: {
    margin: theme.spacing(5),
    width: '250px'
  }
}));

export default useStyles;
