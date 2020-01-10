import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Container,
  IconButton,
  CardHeader,
  Divider,
  Checkbox
} from '@material-ui/core';
import {
  Info as InfoIcon,
  FolderOpen as FolderOpenIcon,
  LocationOn as LocationOnIcon,
  Today as TodayIcon,
  EmojiFlags as EmojiFlagsIcon,
  FiberManualRecord as FiberManualRecordIcon
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import Paperbase from '../Perfil';
import Copyright from '../Copyright';
import FormDialog from '../Modal/Modal';
import { setEditUser } from '../../actions/cambios';

const categories = [
  {
    id: 'cursos',
    curso: { año: '2020', periodo: '1', seccion: 's1' },
    asignatura: { nombre: 'Calculo', tipo: 'P' },
    sala: { numerosala: 'L-203' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '8:10', horafin: '9:30' },
    dia: { nombredia: 'Lunes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  },
  {
    id: 'cursos1',
    curso: { año: '2019', periodo: '2', seccion: 's2' },
    asignatura: { nombre: 'Auditoria', tipo: 'L' },
    sala: { numerosala: 'L-303' },
    carrera: { nombrecarrera: 'Ing. Informatica' },
    horabloque: { horainicio: '2:10', horafin: '4:30' },
    dia: { nombredia: 'Martes' }
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 200,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
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

const Tarjeta = () => {
  const classes = useStyles();

  const { editUser } = useSelector(({ cambios }) => cambios);

  // const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => {
    dispatch(setEditUser(-1, null));
  }, [dispatch]);

  const handleOpenModal = useCallback(
    (index, data) => () => {
      dispatch(setEditUser(index, data));
    },
    [dispatch]
  );

  const index = 0;
  const datito = 2;

  return (
    <Container className={classes.container}>
      <FormDialog
        defaultValues={editUser.data}
        open={!!editUser.data}
        onClose={handleCloseModal}
      />
      <Paperbase />

      <div className={classes.div}>
        {' '}
        {categories.map(
          ({ id, curso, asignatura, sala, carrera, horabloque, dia }) => (
            <React.Fragment key={id}>
              <Card className={classes.card}>
                <CardHeader
                  title={`${curso.año}-${curso.periodo}`}
                  avatar={<FiberManualRecordIcon color='secondary' />}
                  action={
                    <IconButton aria-label='settings'>
                      <Checkbox
                        value='secondary'
                        color='primary'
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        size='small'
                      />
                    </IconButton>
                  }
                />

                <Divider className={classes.divider} />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    <FolderOpenIcon className={classes.icons} />
                    {`${asignatura.nombre} / ${curso.seccion}`}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    <LocationOnIcon className={classes.icons} />
                    {sala.numerosala}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    <EmojiFlagsIcon className={classes.icons} />
                    {carrera.nombrecarrera}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    <TodayIcon className={classes.icons} />
                    {`${horabloque.horainicio}-${horabloque.horafin} ${dia.nombredia}`}{' '}
                    {asignatura.tipo}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    size='small'
                    onClick={handleOpenModal(index, {
                      datito
                    })}
                  >
                    Mas Info...
                    <InfoIcon color='primary' />
                  </IconButton>
                </CardActions>
              </Card>{' '}
            </React.Fragment>
          )
        )}
      </div>

      <div>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </Container>
  );
};

export default Tarjeta;
