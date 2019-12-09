import React, { useCallback } from 'react';
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

import useStyles from './styles';

const Counter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { datosApi } = useSelector(({ counter }) => counter);

  console.log(datosApi);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <div>
      <Button
        className={classes.button}
        variant='contained'
        onClick={handleGoBack}
      >
        Go Back
      </Button>
      <List className={classes.List}>
        {datosApi.map(({ login, email, name, picture }) => (
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
                  <EditIcon className={classes.iconEdit} variant='contained' />
                </IconButton>{' '}
                <IconButton edge='end' aria-label='save'>
                  <DeleteIcon color='secondary' />
                </IconButton>
              </ListItemSecondaryAction>
              s
              <ListItem />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Counter;
