import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    opacity: 0.9
  },
  item: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40vh'
  }
}));

export default useStyles;
