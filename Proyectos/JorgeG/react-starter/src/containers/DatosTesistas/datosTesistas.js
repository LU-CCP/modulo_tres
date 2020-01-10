import React from 'react';
import { Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../Copyright';
import Paperbase from '../Perfil';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 27,
    margin: '5px',
    border: '1px solid',
    borderColor: '#B1B4B7'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  footer: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%',
    height: '40px',
    color: 'white'
  },
  div: {
    display: 'flex'
  },
  div_int: {
    display: 'grid'
  },
  icons: {
    color: 'red',
    paddingRight: '10px'
  },
  divider: {
    border: 'solid black'
  }
}));

const DatosTesistas = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
      }
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <Container>
      <Paperbase />
      <MaterialTable
        title='Tesistas'
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];

                  data.push(newData);

                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();

                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];

                    data[data.indexOf(oldData)] = newData;

                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];

                  data.splice(data.indexOf(oldData), 1);

                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
      <div>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </Container>
  );
};

export default DatosTesistas;
