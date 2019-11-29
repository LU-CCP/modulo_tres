import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: indigo
    }
  })
);

export default theme;
