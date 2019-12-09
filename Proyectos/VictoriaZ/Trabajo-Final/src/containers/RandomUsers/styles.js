import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vh'
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
  },

  bigAvatar: {
    width: 55,
    height: 55
  },
  listItem: {
    alignItems: 'flex-start',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '120vh'
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '5vh'
  }
}));

export default useStyles;
