import React, { useCallback, useState } from 'react';
import {
  Button,
  Container,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch } from 'react-redux';
import { goBack, getAction } from 'connected-react-router';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';

import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [api, setUsers] = useState([]);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();
    const { results } = data;

    if (Array.isArray(results)) {
      setUsers(results);
    }

    console.log(results);
  });
  const handleSubmit = useCallback(() => dispatch(getAction()), [dispatch]);

  return (
    <div>
      <Container className={classes.container} maxWidth={false}>
        <Button
          className={classes.button}
          variant='contained'
          onClick={handleGoBack}
        >
          ATRAS
        </Button>
        <List className={classes.List}>
          {api.map(({ login, email, name, picture }) => (
            <ListItem className={classes.List} key={login.uuid}>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar src={`${picture.thumbnail}`} alt='Avatar' />
                </ListItemAvatar>
                <ListItemText
                  primary={`${name.first}${' '}${name.last}`}
                  secondary={email}
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='save'>
                    <SaveIcon color='primary' onSubmit={handleSubmit} />
                  </IconButton>
                </ListItemSecondaryAction>
                <Divider />
                <ListItem />
              </ListItem>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default About;
