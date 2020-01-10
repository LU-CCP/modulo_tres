import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField } from '@material-ui/core';

import Paperbase from '../Perfil';
import Copyright from '../Copyright';

const useStyles = makeStyles(theme => ({
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
    marginBlock: '10px',
    display: 'list-item'
  },
  card_interior: {
    marginTop: '3px',
    minWidth: 250,
    backgroundColor: '#eaeff1',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'center'
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
    display: 'grid'
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
    display: 'block',
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

export default function Configuracion() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paperbase />
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
                  {'Contraseña'}
                </Typography>
              </div>
              <Card className={classes.card_interior}>
                <CardContent>
                  <Typography className={classes.pos} color='textSecondary'>
                    {'Cambio de Contraseña'}
                  </Typography>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Contraseña actual'
                    color='primary'
                    margin='dense'
                    size='small'
                  />
                </CardContent>
                <CardContent>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Nueva Contraseña'
                    color='primary'
                    margin='dense'
                    size='small'
                  />
                </CardContent>
                <CardContent>
                  <TextField
                    className={classes.item}
                    variant='outlined'
                    label='Nueva Contraseña'
                    color='primary'
                    margin='dense'
                    size='small'
                  />
                </CardContent>
              </Card>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size='small'>
                {'Cambiar Contraseña'}
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
