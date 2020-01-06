import React, { Fragment } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
// import { useSelector, useDispatch } from 'react-redux';
// import { goBack } from 'connected-react-router';

const FormDialog = ({ open, onClose, defaultValues }) => {
  // const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({
    defaultValues
  });

  // const { register, handleSubmit, errors } = useForm();
  // const dispatch = useDispatch();

  // console.log(props);

  // const handleClickOpen = () => {
  //   // setOpen(true);
  // };

  // const handleClose = () => {
  //   props.onClose();
  //   // setOpen(false);
  // };

  // const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const onSubmit = (data, e) => {
    // alert(`${firstName} ${lastName} ${email} `);
    console.log(data);
    // handleGoBack()
    e.preventDefault();
    console.log(data);
  };

  const [age, setAge] = React.useState('');

  const handleChangeAge = event => {
    setAge(event.target.value);
  };

  const [day, setDay] = React.useState('');

  const handleChangeDay = event => {
    setDay(event.target.value);
  };
  // // const { datosApi } = useSelector(({ counter }) => counter);

  // //   console.log('datosModal', datosApi[0].name.first);

  return (
    <Fragment>
      <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogTitle id='form-dialog-title'>Detalle</DialogTitle>
          <DialogContent>
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='nombre_curso'
              inputRef={register}
              label='Nombre Curso'
              required
              helperText='Nombre Curso es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='asignatura'
              inputRef={register}
              label='Asignatura'
              required
              helperText='Asignatura es requirido.'
              size='small'
            />
            <Select
              labelId='demo-simple-select-error-label'
              id='demo-simple-select-error'
              value={age}
              onChange={handleChangeAge}
              renderValue=''
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='nrocredito'
              inputRef={register}
              label='Numero de Creditos'
              type='number'
              required
              helperText='Numero de creditos es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='anio'
              inputRef={register}
              label='Añp'
              required
              type='number'
              helperText='Año es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='periodo'
              inputRef={register}
              label='Periodo'
              type='number'
              required
              helperText='Periodo es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='horabloque'
              inputRef={register}
              label='Hora Bloque'
              required
              type='time'
              helperText='Hora Bloque es requirido.'
              size='small'
            />
            <Select
              labelId='demo-simple-select-error-label'
              id='demo-simple-select-errorw'
              value={day}
              onChange={handleChangeDay}
              renderValue=''
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Lunes'>Lunes</MenuItem>
              <MenuItem value='Martes'>Martes</MenuItem>
              <MenuItem value='Miercoles'>Miercoles</MenuItem>
              <MenuItem value='Jueves'>Jueves</MenuItem>
              <MenuItem value='Viernes'>Viernes</MenuItem>
              <MenuItem value='Sabado'>Sabado</MenuItem>
              <MenuItem value='Domingo'>Domingo</MenuItem>
            </Select>
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='sala'
              inputRef={register}
              label='Sala'
              required
              helperText='Sala es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='ubicacion'
              inputRef={register}
              label='Ubicacion'
              required
              helperText='Ubicacion es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='carrera'
              inputRef={register}
              label='Carrera'
              required
              helperText='Carrera es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='facultad'
              inputRef={register}
              label='Facultad'
              required
              helperText='Facultad es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='nombre_sede'
              inputRef={register}
              label='Nombre Sede'
              required
              helperText='Nombre Sede es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='sede_ciudad'
              inputRef={register}
              label='Ciudad Sede'
              required
              helperText='Ciudad Sede es requirido.'
              size='small'
            />
            <TextField
              error={!!errors.email}
              autoFocus
              margin='dense'
              name='institucion'
              inputRef={register}
              label='Institucion'
              required
              helperText='Institucion es requirido.'
              size='small'
            />
            <p>{errors.email && 'Invalid email address'}</p>
          </DialogContent>
          <DialogActions>
            <Button type='submit' color='primary'>
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

export default FormDialog;
