import React, { useCallback, useState } from 'react';
import {
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';

import { dropUsuariosCargados } from '../actions/counter';

import FormDialog from './Modal';
import useStyles from './styles';

const Counter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { datosApi } = useSelector(({ counter }) => counter);
  const [openModal, setOpenModal] = useState(false);

  console.log('datillos', datosApi);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);
  const handleDelete = useCallback(
    index => () => dispatch(dropUsuariosCargados(index)),
    [dispatch]
  );
  // const handleNavigate = useCallback(path => () => dispatch(push(path)), [
  //   dispatch
  // ]);

  const handleOpenModal = useCallback(
    open => () => {
      console.log('click en el boton');
      setOpenModal(open);
    },
    [setOpenModal]
  );

  console.log('openModal', openModal);

  return (
    <div>
      <FormDialog open={openModal} onClose={handleOpenModal(false)} />
      <Button
        className={classes.button}
        variant='contained'
        onClick={handleGoBack}
      >
        ATRAS
      </Button>
      <List className={classes.List}>
        {datosApi.map(({ login, email, name, picture }, index) => (
          <ListItem className={classes.List} key={login.uuid}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar src={`${picture.thumbnail}`} alt='Avatar' />
              </ListItemAvatar>
              <ListItemText
                primary={`${name.first}${' '}${name.last}`}
                secondary={email}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='edit'>
                  <EditIcon
                    className={classes.iconEdit}
                    variant='contained'
                    onClick={handleOpenModal(true)}
                  />
                </IconButton>{' '}
                <IconButton edge='end' aria-label='save'>
                  <DeleteIcon
                    color='secondary'
                    onClick={handleDelete({ datosApi, index })}
                  />
                </IconButton>
              </ListItemSecondaryAction>

              <ListItem />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Counter;
