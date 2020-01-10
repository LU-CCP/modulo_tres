import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
import { Container, Grid, TextField } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { useDispatch, useSelector } from 'react-redux';

// import FormDialog from '../Modal/Modal';
// import { setEditUser } from '../../actions/cambios';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import OutlinedInput  from '@material-ui/core/OutlinedInput';
// import Paper from '@material-ui/core/Paper';
import Paperbase from '../Perfil';
import Copyright from '../Copyright';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 0
  },
  divHidden: {
    width: 256,
    height: 256,
    backgroundColor: 'white'
  },
  footer: {
    position: '-webkit-sticky',
    left: '0px',
    bottom: '0px',
    width: '100%',
    height: '40px',
    color: 'white'
  },
  card: {
    minWidth: 275,
    backgroundColor: '#232f3e',
    marginBlock: '10px'
  },
  card_interior: {
    marginTop: '3px',
    minWidth: 250,
    backgroundColor: '#eaeff1',
    padding: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 2,
    fontWeight: 'bold'
  },
  grid: {
    display: 'grid',
    position: 'center'
    // alignItems: 'center',
    // justifyContent: 'center',
    // // [theme.breakpoints.down('xs')]: {
    // //   gridTemplateColumns: '1fr'
    // // },
    // [theme.breakpoints.up('xs')]: {
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundColor: 'blue',
    //   gridTemplateColumns: '200px 1fr'
    // }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#B1B4B7',
    maxWidth: 500,
    padding: theme.spacing(4)
  },
  item: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    margin: theme.spacing(1)
  },
  div: {
    backgroundColor: 'black',
    border: '3px solid black',
    borderRadius: '10px'
  },
  button: {
    backgroundColor: '#eaeff1',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#4fc3f7',
      fontWeight: 700
    }
  }
}));

export default function DatosPersonales() {
  const classes = useStyles();
  // const { editUser } = useSelector(({ cambios }) => cambios);
  // // const [showPassword, setShowPassword] = useState(false);

  // const [openModal, setOpenModal] = useState(false);

  // const dispatch = useDispatch();

  // const handleCloseModal = useCallback(() => {
  //   dispatch(setEditUser(-1, null));
  // }, [dispatch]);

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  // const handleSubmit = useCallback(() => {}, []);

  // const handleOpenModal = useCallback(
  //   (index, data) => () => {
  //     dispatch(setEditUser(index, data));
  //   },
  //   [dispatch]
  // );

  return (
    <Container className={classes.container}>
      <Paperbase />
      {/* <FormDialog
        defaultValues={editUser.data}
        open={!!editUser.data}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      /> */}
      <Grid className={classes.grid}>
        <div>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.div}>
                <Typography
                  className={classes.title}
                  color='textSecondary'
                  gutterBottom
                >
                  {'Mis Datos'}
                </Typography>
              </div>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Identificacion'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Run'
                    color='primary'
                    margin='dense'
                    size='small'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Rol'
                    color='primary'
                    margin='dense'
                    size='small'
                  />
                </CardContent>
              </Card>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Nombre'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Nombre'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Apellido Paterno'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Apellido Materno'
                    color='primary'
                    margin='dense'
                  />
                </CardContent>
              </Card>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Academico'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Titulo Profesional'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Postítulo'
                    color='primary'
                    margin='dense'
                  />
                </CardContent>
              </Card>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Dirección'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Nombre'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Calle'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Numero'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Comuna'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Region'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Pais'
                    color='primary'
                    margin='dense'
                  />
                </CardContent>
              </Card>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Contacto'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Fono'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Fono Urgencia'
                    color='primary'
                    margin='dense'
                  />
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Correo'
                    color='primary'
                    margin='dense'
                  />
                </CardContent>
              </Card>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size='small'>
                {'Editar'}
              </Button>
            </CardActions>
          </Card>
        </div>
      </Grid>

      <div>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </Container>
  );
}
