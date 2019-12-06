import React, { useCallback } from 'react';
import useForm from 'react-hook-form';
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
  withStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { ROOT } from '../../routes/paths';
import { deleteUser, updateUser } from '../../actions/users';

import ErrorMessage from './errorMessage';
import useStyles from './styles';

const UsersList = () => {
  const [open, setOpen] = React.useState(false);
  const [varUser, setVarUser] = React.useState([]);

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const handleUpdateUser = useCallback(
    (user, index) => dispatch(updateUser(user, index)),
    [dispatch]
  );

  const onSubmit = ({ firstName, lastName, email, index }) => {
    handleClose();
    const items = {
      first: firstName,
      last: lastName,
      mail: email
    };

    handleUpdateUser(items, index);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const { usersList } = useSelector(({ users }) => users);

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  const handleDeleteUser = useCallback(
    index => () => dispatch(deleteUser(index)),
    [dispatch]
  );

  const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 20
    }
  }))(TableCell);

  const handleOpenModal = (user, index) => () => {
    const arr = [];

    arr[index] = user;
    setVarUser(arr);
    handleClickOpen();
  };

  const renderUserslist = (lista, index) => (
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
        <CreateIcon onClick={handleOpenModal(lista, index)} color='primary' />
        <DeleteIcon onClick={handleDeleteUser(index)} color='secondary' />
      </TableCell>
    </TableRow>
  );

  const renderDialog = (user, index) => (
    <Grid container key={user.login.uuid}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className={classes.app}
      >
        <DialogTitle id='alert-dialog-title'>Update user</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <form
              className={classes.appForm}
              onSubmit={handleSubmit(onSubmit)}
              ref={register}
            >
              <Grid item>
                <input
                  type='hidden'
                  name='index'
                  value={index}
                  ref={register}
                />
                <label className={classes.labelForm}>First Name:</label>
                <input
                  className={classes.appFormItem}
                  name='firstName'
                  label='First name'
                  type='input'
                  defaultValue={user.name.first}
                  ref={register({
                    required: 'Firts name'
                  })}
                />
                <ErrorMessage error={errors.firstName} />
              </Grid>
              <Grid item>
                <label className={classes.labelForm}>Last Name:</label>
                <input
                  className={classes.appFormItem}
                  name='lastName'
                  label='Last name'
                  ref={register({ required: 'Last name' })}
                  defaultValue={user.name.last}
                />
                <ErrorMessage error={errors.lastName} />
              </Grid>
              <Grid item>
                <label className={classes.labelForm}>Email:</label>
                <input
                  className={classes.appFormItem}
                  name='email'
                  label='Email'
                  ref={register({ required: 'Email', pattern: /^\S+@\S+$/i })}
                  defaultValue={user.email}
                />
                <ErrorMessage error={errors.email} />
              </Grid>
              <Grid item>
                <Button
                  className={classes.buttonForm}
                  type='submit'
                  color='secondary'
                  variant='contained'
                >
                  {'Update user'}
                </Button>
              </Grid>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Grid>
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
      <Grid>
        <Paper>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Saved users list</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{usersList.map(renderUserslist)}</TableBody>
          </Table>
        </Paper>
      </Grid>

      {varUser.map(renderDialog)}
    </Container>
  );
};

export default UsersList;
