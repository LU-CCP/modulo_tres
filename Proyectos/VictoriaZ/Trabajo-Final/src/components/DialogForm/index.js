import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Paper
} from '@material-ui/core/';

import { closeForm } from '../../actions/home';
import Formulario from '../FormHooks';

const DialogForm = ({ index }) => {
  const dispatch = useDispatch();
  const { users, editar } = useSelector(({ home }) => home);

  const handleCloseForm = useCallback(() => dispatch(closeForm()), [dispatch]);

  return (
    <Grid>
      <Paper>
        <Dialog
          open={editar}
          onClose={handleCloseForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogContent>
            <Formulario index={index} user={users.modifiedUser} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color='primary'>
              {'CANCEL'}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Grid>
  );
};

export default memo(DialogForm);
