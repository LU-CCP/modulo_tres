import React, { memo } from 'react';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, TextField, Grid, Paper } from '@material-ui/core/';
import PropTypes from 'prop-types';

import { editUser } from '../../actions/home';

import useStyles from './styles';

const Formulario = ({ index, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ firstName, lastName, mail }) => {
    dispatch(editUser({ index, firstName, lastName, mail }));
  };

  return (
    <Grid>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            className={classes.item}
            name='firstName'
            inputRef={register({
              required: 'First Name is required'
            })}
            defaultValue={user.first}
            label='First Name'
            helperText={errors.firstName && errors.firstName.message}
          />

          <TextField
            className={classes.item}
            variant='outlined'
            name='lastName'
            inputRef={register({
              required: 'Last Name is required'
            })}
            defaultValue={user.last}
            label='Last Name'
            helperText={errors.lastName && errors.lastName.message}
          />
          <TextField
            variant='outlined'
            className={classes.item}
            name='mail'
            inputRef={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            })}
            defaultValue={user.email}
            label='E-mail'
            helperText={errors.mail && errors.mail.message}
          />

          <Button
            className={classes.item}
            type='submit'
            color='primary'
            variant='contained'
          >
            {'Submit'}
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

Formulario.propTypes = {
  index: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
export default memo(Formulario);
