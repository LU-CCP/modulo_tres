import { createMuiTheme, responsiveFontSizes, colors } from '@material-ui/core'; // acomoda la letra segun el tamañño de pantalla

const theme = responsiveFontSizes(
  createMuiTheme({
    // sobre escribir propiedades
    palette: {
      primary: colors.amber
    }
  })
);

export default theme; // se importa en Root
