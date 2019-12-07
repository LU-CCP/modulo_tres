import { makeStyles } from '@material-ui/core/styles';

import loginBg from '../../resources/images/loginBg.jpg';

// Hook
const useStyles = makeStyles(theme => ({
  // devuelve objeto con los class de estilo
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${loginBg})`,
    // estilos responsivos, depende de la pantalla en la q se ve la pagina
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
  item: {
    marginBottom: theme.spacing(2), // espacios entre items
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;
