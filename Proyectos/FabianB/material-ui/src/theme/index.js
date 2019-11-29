import { createMuiTheme, responsiveFontSizes, colors } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: colors.purple
    }
  })
);

export default theme;
