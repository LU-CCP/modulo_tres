import React, { useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { USERS, RANDOMUSERS, ROOT } from '../../routes/paths';

import useStyles from './styles';

const IconLabelTabs = props => {
  const dispatch = useDispatch();

  const { value } = props;

  const classes = useStyles();
  const [val, setVal] = React.useState(value);

  const handleNavigate = useCallback(
    (path, index) => () => {
      dispatch(push(path));
      setVal(index);
    },
    [dispatch]
  );

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={val}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
      >
        <Tab
          icon={<HomeIcon />}
          label='HOME'
          onClick={handleNavigate(ROOT, 0)}
        />
        <Tab
          icon={<HelpIcon />}
          label='RANDOM USERS'
          id={RANDOMUSERS}
          onClick={handleNavigate(RANDOMUSERS, 1)}
        />
        <Tab
          icon={<PersonPinIcon />}
          label='USERS'
          onClick={handleNavigate(USERS, 2)}
        />
      </Tabs>
    </Paper>
  );
};

IconLabelTabs.propTypes = {
  value: PropTypes.object.isRequired
};

export default IconLabelTabs;
