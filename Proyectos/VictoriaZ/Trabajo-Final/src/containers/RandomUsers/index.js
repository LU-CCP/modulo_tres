import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Grid,
  Divider,
  List
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { useMount } from '../../hooks';
import { exampleApi } from '../../services';
import { saveUser, setRandomUsers } from '../../actions/home';
import { IconLabelTabs } from '../../components';

import useStyles from './styles';

const RandomUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { randomUsers } = useSelector(({ home }) => home);

  const handleSaveUser = useCallback(
    (index, data) => () => dispatch(saveUser(index, data)),
    [dispatch]
  );

  useMount(async () => {
    const qs = { page: 1, results: 50 };
    const { data } = await exampleApi().getUsers(qs);

    const { results } = data;

    const users = results.map(randomUser => ({
      first: randomUser.name.first,
      last: randomUser.name.last,
      email: randomUser.email,
      picture: randomUser.picture.thumbnail,
      id: randomUser.login.uuid
    }));

    dispatch(setRandomUsers(users));
  }, []);
  const renderRandomUsers = () =>
    randomUsers.randomUsersList.map((randomUser, index) => (
      <List>
        <ListItem key={randomUser.id} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={randomUser.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={`${randomUser.first} ${randomUser.last}`}
            secondary={randomUser.email}
          />

          <Button
            className={classes.item}
            onClick={handleSaveUser(index, randomUser)}
            startIcon={<SaveIcon />}
            color='primary'
          >
            {''}
          </Button>
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    ));

  return (
    <Container className={classes.container}>
      <IconLabelTabs value={1} />
      <h1 style={{ color: 'grey' }}> {'Lista Usuarios Random'}</h1>
      <Grid>{renderRandomUsers()}</Grid>
    </Container>
  );
};

export default RandomUsers;
