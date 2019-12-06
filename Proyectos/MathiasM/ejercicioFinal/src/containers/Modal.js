import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';


export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const {register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const onSubmit = (data,e) =>{
    const { firstName,lastName, email } = data;
    //alert(`${firstName} ${lastName} ${email} `);
    console.log(data)
    //handleGoBack()
    e.preventDefault();
    console.log(data);
}
const { datosApi } = useSelector(({ counter }) => counter);
console.log('datosModal',datosApi[0].name.first)
  return (
    <Fragment>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form className='App-Form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogTitle id="form-dialog-title">Actualizar Datos</DialogTitle>
        <DialogContent>
          <TextField
            error={!!errors.email}
            autoFocus
            margin="dense"
            id="firstName"
            name="firstName"
            inputRef={register}
            label="First Name"
            type="text"
            value={datosApi[0].name.first}
            fullWidth
          />
          
          <TextField
            error
            autoFocus
            margin="dense"
            id="lastName"
            name="lastName"
            inputRef={register}
            label="Last Name"
            type="text"
            value={datosApi[0].name.last}
            fullWidth
            required
            helperText="Last Name is required."
          />
          <TextField
            error={!!errors.email}
            autoFocus
            margin="dense"
            id="email"
            name="email"
            inputRef={register({
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
            label="Email"
            type="email"   
            fullWidth
            helperText="Email is required."
          />
          <p>{errors.email && "Invalid email address"}</p>
        </DialogContent>
        <DialogActions>
          <Button type='submit' color="primary">
            Save
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
}
