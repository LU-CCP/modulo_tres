import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
// import { goBack } from 'connected-react-router';

const FormDialog = ({ open, onClose, defaultValues, onSubmit }) => {
  // const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({
    defaultValues
  });
  // const dispatch = useDispatch();

  // const handleClickOpen = () => {
  //   // setOpen(true);
  // };

  // const handleClose = () => {
  //   onClose();
  //   // setOpen(false);
  // };

  // const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  // const onSubmit = data => {};

  // const { editUser } = useSelector(({ counter }) => counter);

  // console.log('datosModal', datosApi[0].name.first);

  return (
    <Fragment>
      <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogTitle id='form-dialog-title'>Actualizar Datos</DialogTitle>
          <DialogContent>
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='name.first'
              inputRef={register}
              label='First Name'
              // value={datosApi[0].name.first}
              fullWidth
            />

            <TextField
              error
              margin='dense'
              name='name.last'
              inputRef={register}
              label='Last Name'
              // value={datosApi[0].name.last}
              fullWidth
              required
              helperText='Last Name is required.'
            />
            <TextField
              error={!!errors.email}
              margin='dense'
              id='email'
              name='email'
              inputRef={register({
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              label='Email'
              type='email'
              fullWidth
              helperText='Email is required.'
            />
            <p>{errors.email && 'Invalid email address'}</p>
          </DialogContent>
          <DialogActions>
            <Button type='submit' color='primary'>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

export default FormDialog;
