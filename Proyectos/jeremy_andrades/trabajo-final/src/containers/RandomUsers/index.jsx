import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Grid,
  Button,
  Avatar,
  Typography,
  withStyles
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import useMount from '../../hooks/useMount';
import jsonApi from '../../services/jsonApi';
import { ROOT } from '../../routes/paths';
import { fillUsers, deleteUser } from '../../actions/randomUsers';
import { saveUser } from '../../actions/users';

import useStyles from './styles';

const RandomUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { usersRandomList } = useSelector(({ randomUsers }) => randomUsers);

  const handleSaveUser = useCallback(user => dispatch(saveUser(user)), [
    dispatch
  ]);

  const handleDeleteUser = useCallback(index => dispatch(deleteUser(index)), [
    dispatch
  ]);

  const handleSaveAndDelete = (user, index) => () => {
    handleSaveUser(user);
    handleDeleteUser(index);
  };

  const handleFillUsers = useCallback(element => dispatch(fillUsers(element)), [
    dispatch
  ]);
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray(data.results)) {
      handleFillUsers(data.results);
    }
  });

  const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 20
    }
  }))(TableCell);

  const renderRandomUsers = (lista, index) => (
    <TableRow key={lista.login.uuid}>
      <TableCell align='left'>
        <Grid container spacing={3}>
          <Grid item xs={1} className={classes.gridTable}>
            <Avatar
              src={lista.picture.medium}
              alt={lista.name.first}
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography gutterBottom>
              {lista.name.first} {lista.name.last}
            </Typography>
            <Typography gutterBottom>{lista.email}</Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align='right'>
        <SaveIcon
          onClick={handleSaveAndDelete(lista, index)}
          color='secondary'
        />
      </TableCell>
    </TableRow>
  );

  return (
    <Container className={classes.container}>
      <Grid>
        <Button
          onClick={handleNavigate(ROOT)}
          variant='contained'
          color='secondary'
          className={classes.button}
        >
          Go to Home
        </Button>
      </Grid>
      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Random users list Count:{usersRandomList.lenght}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersRandomList.map(renderRandomUsers)}</TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default RandomUsers;
