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
    justifyContent: 'center'
  },
  logo: {
    height: '40vmin'
  },
  title: {
    color: '#09d3ac',
    textAlign: 'center',
    marginBottom: 20
  },
  link: {
    color: '#09d3ac'
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
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: '1vh'
  }
}));

export default useStyles;
