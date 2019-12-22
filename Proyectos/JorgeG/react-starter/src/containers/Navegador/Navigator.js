// import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { withStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import PeopleIcon from '@material-ui/icons/People';
// import BookIcon from '@material-ui/icons/Book';
// import SettingsIcon from '@material-ui/icons/Settings';
// import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
// import { Link } from 'react-router-dom';

// import { TARJETA } from '../../routes/paths';

// // import Tarjeta from './Tarjeta';
// // import ListaCursos from './ListaCursos';

// const styles = theme => ({
//   categoryHeader: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2)
//   },
//   categoryHeaderPrimary: {
//     color: theme.palette.common.white
//   },
//   item: {
//     paddingTop: 1,
//     paddingBottom: 1,
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&:hover,&:focus': {
//       backgroundColor: 'rgba(255, 255, 255, 0.08)'
//     }
//   },
//   itemCategory: {
//     backgroundColor: '#232f3e',
//     boxShadow: '0 -1px 0 #404854 inset',
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2)
//   },
//   firebase: {
//     fontSize: 24,
//     color: theme.palette.common.white
//   },
//   itemActiveItem: {
//     color: '#4fc3f7'
//   },
//   itemPrimary: {
//     fontSize: 'inherit'
//   },
//   itemIcon: {
//     minWidth: 'auto',
//     marginRight: theme.spacing(2)
//   },
//   divider: {
//     marginTop: theme.spacing(2)
//   }
// });

// function Navigator(props) {
//   const { classes, ...other } = props;
//   const dispatch = useDispatch();
//   const handleNavigate = useCallback(path => () => dispatch(push(path)), [
//     dispatch
//   ]);

//   return (
//     <Drawer variant='permanent' {...other}>
//       <List disablePadding>
//         <ListItem
//           className={clsx(classes.firebase, classes.item, classes.itemCategory)}
//         >
//           Perfil
//         </ListItem>
//         <ListItem className={clsx(classes.item, classes.itemCategory)}>
//           <ListItemIcon className={classes.itemIcon}>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText
//             classes={{
//               primary: classes.itemPrimary
//             }}
//           >
//             Mi cuenta
//           </ListItemText>
//         </ListItem>
//         <ListItem className={classes.categoryHeader}>
//           <ListItemText className={clsx(classes.itemCategory && classes.item)}>
//             Informacion
//           </ListItemText>
//         </ListItem>
//         <ListItem
//           button
//           className={clsx(classes.item && classes.itemActiveItem)}
//         >
//           <ListItemIcon className={classes.itemIcon}>
//             <PeopleIcon onClick={handleNavigate(TARJETA)} />
//           </ListItemIcon>

//           <ListItemText
//             classes={{
//               primary: classes.itemPrimary
//             }}
//           >
//             Mis Datos
//           </ListItemText>
//         </ListItem>
//         <ListItem
//           button
//           className={clsx(classes.item && classes.itemActiveItem)}
//         >
//           <ListItemIcon className={classes.itemIcon}>
//             <BookIcon />
//           </ListItemIcon>
//           <Link
//             classes={{
//               primary: classes.itemPrimary
//             }}
//             to='/tarjeta'
//           >
//             Mis Cursos
//           </Link>
//         </ListItem>
//         <ListItem className={classes.categoryHeader}>
//           <ListItemText className={clsx(classes.itemCategory && classes.item)}>
//             Opciones
//           </ListItemText>
//         </ListItem>
//         <ListItem
//           button
//           className={clsx(classes.item && classes.itemActiveItem)}
//         >
//           <ListItemIcon className={classes.itemIcon}>
//             <SettingsIcon />
//           </ListItemIcon>

//           <ListItemText
//             classes={{
//               primary: classes.itemPrimary
//             }}
//           >
//             Configuracion
//           </ListItemText>
//         </ListItem>

//         <Divider className={classes.divider} />
//       </List>
//     </Drawer>
//   );
// }

// Navigator.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Navigator);
