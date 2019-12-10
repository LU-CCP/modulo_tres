import React, { useCallback } from 'react';
import { goBack, push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  DeleteIcon,
  IconButton,
  Grid,
  HomeIcon
} from '@material-ui/core';
import { setRamdom, setSaveUsers } from '../../actions/users';
import usersApi from '../../services/ramdom';
import { useMount } from '../../hooks';

const Ramdom = () => {
  const dispatch = useDispatch();

  const { ramdomUsers } = useSelector(({ users }) => users);

  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);

  const handleSetRamdom = useCallback(item => dispatch(setRamdom(item)), [
    dispatch
  ]);

  const handleSendSave = useCallback(
    item => () => dispatch(setSaveUsers(item)),
    [dispatch]
  );

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    margin: { margin: theme.spacing(1) },
    inline: {
      display: 'inline'
    },
    title: {
      margin: theme.spacing(4, 4, 2)
    },
    Button: {
      margin: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  useMount(async () => {
    const { data } = await usersApi().getUsers();

    if (Array.isArray(data.results)) {
      handleSetRamdom(data.results);
    }
  });
};
