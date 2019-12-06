import React from 'react';

import useStyles from './styles';

export default function ErrroMessage({ error }) {
  const classes = useStyles();

  if (error) {
    switch (error.type) {
      case 'required':
        return <p className={classes.pForm}>{error.message} is required</p>;
      case 'pattern':
        return <p className={classes.pForm}>Enter a valid email</p>;
      default:
        return null;
    }
  }

  return null;
}
