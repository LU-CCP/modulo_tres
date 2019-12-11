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

import { dropUsuariosCargados, setEditUser } from '../actions/counter';

import FormDialog from './Modal';
import useStyles from './styles';

const Counter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { datosApi, editUser } = useSelector(({ counter }) => counter);

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
    (index, data) => () => {
      dispatch(setEditUser(index, data));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(setEditUser(-1, null));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {}, []);

  // if (editUser) {
  //   !== undefined !== null !== '' !== NaN !== 0 !== false
  // }

  // const v = !!editUser.data;

  return (
    <div>
      <FormDialog
        defaultValues={editUser.data}
        open={!!editUser.data}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
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
                    onClick={handleOpenModal(index, {
                      login,
                      email,
                      name,
                      picture
                    })}
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
