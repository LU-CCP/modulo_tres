import React, { useCallback } from 'react';
import {
  Button,
  Container,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useStyles from './styles';

const Counter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <div>
      <Container>
        <Button
          className={classes.button}
          variant='contained'
          onClick={handleGoBack}
        >
          ATRAS
        </Button>
      </Container>
    </div>
  );
};

export default Counter;
