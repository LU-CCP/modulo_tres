import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    color: '#FFF'
  },
  button: {
    margin: theme.spacing(1),
    align: 'left'
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  gridTable: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;
