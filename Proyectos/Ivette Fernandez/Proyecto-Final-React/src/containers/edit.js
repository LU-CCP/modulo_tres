import Button from '@material-ui/core/Button';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';

const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Editar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                placeholder='Nombre'
                name='First name'
                ref={register({ required: true, maxLength: 80 })}
              />
              <div>
                <input
                  type='text'
                  placeholder='Apellido'
                  name='Last name'
                  ref={register({ required: true, maxLength: 100 })}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Email'
                  name='Email'
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Guardar
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
