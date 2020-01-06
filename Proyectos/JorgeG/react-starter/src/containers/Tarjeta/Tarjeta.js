import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, IconButton, CardHeader, Divider } from '@material-ui/core';
import {
  Info as InfoIcon,
  FolderOpen as FolderOpenIcon,
  LocationOn as LocationOnIcon,
  Today as TodayIcon,
  EmojiFlags as EmojiFlagsIcon,
  FiberManualRecord as FiberManualRecordIcon
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import Paperbase from '../Perfil';
import Copyright from '../Copyright';
import FormDialog from '../Modal/Modal';
import { setEditUser } from '../../actions/cambios';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 200,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  card: {
    minWidth: 27,
    margin: '5px',
    border: '1px solid',
    borderColor: '#B1B4B7'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  footer: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%',
    height: '40px',
    color: 'white'
  },
  div: {
    display: 'flex'
  },
  div_int: {
    display: 'grid'
  },
  icons: {
    color: 'red',
    paddingRight: '10px'
  },
  divider: {
    border: 'solid black'
  }
}));

const Tarjeta = () => {
  const classes = useStyles();

  const { editUser } = useSelector(({ cambios }) => cambios);

  // const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => {
    dispatch(setEditUser(-1, null));
  }, [dispatch]);

  const handleOpenModal = useCallback(
    (index, data) => () => {
      dispatch(setEditUser(index, data));
    },
    [dispatch]
  );

  const index = 0;
  const datito = 2;

  return (
    <Container className={classes.container}>
      <FormDialog
        defaultValues={editUser.data}
        open={!!editUser.data}
        onClose={handleCloseModal}
      />
      <Paperbase />
      <div className={classes.div}>
        <Card className={classes.card}>
          <CardHeader
            title='2020-2'
            avatar={<FiberManualRecordIcon color='secondary' />}
          />
          <Divider className={classes.divider} />
          <CardContent>
            <Typography variant='h5' component='h2'>
              <FolderOpenIcon className={classes.icons} />
              {'Calculo'}
            </Typography>
            <Typography variant='body2' component='p'>
              <LocationOnIcon className={classes.icons} />
              {'L-203'}
            </Typography>
            <Typography variant='body2' component='p'>
              <EmojiFlagsIcon className={classes.icons} />
              {'Ing. Informatica'}
            </Typography>
            <Typography variant='body2' component='p'>
              <TodayIcon className={classes.icons} />
              {'8:10 - 9:30 Lunes'} {'P'}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              size='small'
              onClick={handleOpenModal(index, {
                datito
              })}
            >
              Mas Info...
              <InfoIcon color='primary' />
            </IconButton>
          </CardActions>
        </Card>
      </div>

      <div>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </Container>
  );
};

export default Tarjeta;
