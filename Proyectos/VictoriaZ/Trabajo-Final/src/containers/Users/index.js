import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Container,
  Grid,
  List,
  Divider
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { deleteUser, openForm } from '../../actions/home';
import { IconLabelTabs, DialogForm } from '../../components';

import useStyles from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(({ home }) => home);
  const classes = useStyles();

  const handleDeleteUser = useCallback(
    index => () => dispatch(deleteUser(index)),
    [dispatch]
  );

  const handleOpenForm = useCallback(index => () => dispatch(openForm(index)), [
    dispatch
  ]);

  const renderUsers = () =>
    users.usersList.map((user, index) => (
      <List>
        <ListItem key={user.id} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={user.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={`${user.first} ${user.last}`}
            secondary={user.email}
          />
          <Button
            className={classes.item}
            onClick={handleOpenForm(index)}
            startIcon={<EditIcon />}
            color='primary'
          >
            {''}
          </Button>
          <Button
            className={classes.item}
            onClick={handleDeleteUser(index)}
            startIcon={<DeleteIcon />}
            color='secondary'
          >
            {''}
          </Button>

          <DialogForm index={index} />
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    ));

  return (
    <Container className={classes.container}>
      <IconLabelTabs value={2} />
      <h1 style={{ color: 'grey' }}> {'Lista Usuarios'}</h1>

      <Grid>{renderUsers()}</Grid>
    </Container>
  );
};

export default Users;
