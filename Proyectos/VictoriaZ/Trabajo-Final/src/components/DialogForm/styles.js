import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    spacing: 50
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
    alignItems: 'flex-start'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    padding: theme.spacing(4),
    opacity: 0.9,
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default useStyles;
