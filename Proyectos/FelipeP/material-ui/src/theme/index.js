import { createMuiTheme, responsiveFontSizes, colors } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: colors.pink
    }
  })
);

export default theme;
