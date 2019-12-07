// BORRADOR, ACA VA LA LOGICA, SE ENVIAN LOS LIKES Y MANIPULA LOS ARRAYS

import { createReducer } from 'reduxsauce'; // importamos createReducer
import produce from 'immer'; // importamos produce, nos permite saber si algo cambia??

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list'; // importamos los propiedades de del objeto Types de nuestras acciones

const INITIAL_STATE = {
  // definimos nuestro estado inicial, este sera el estado que tendra la app al levantarse, es un objeto
  menus: ['arroz con pollo', 'lentejas', 'bistec a lo pobre', 'porotos'],
  likeMenus: [],
  dislikeMenus: [],
  likes: 0,
  dislikes: 0
};

const sendLike = produce((draft, { index }) => {
  // draft hace referencia al borrador
  draft.likes += 1; // like = like + 1
  draft.likeMenus.push(draft.menus[index]); // enviamos la camida al array likeMenus
  draft.menus = draft.menus.filter((p, i) => i !== index); // borramos la comida que se envio del array menus(principal)
  // filter() crea un nuevo array con todos los elelemtos que cumplan con la condicion dada
});

const sendDislike = produce((draft, { index }) => {
  draft.dislikes += 1; // disLikes = disLikes + 1
  draft.dislikeMenus.push(draft.menus[index]); // enviamos la comida al array dislikeMenus
  draft.menus = draft.menus.filter((p, i) => i !== index); // borramos la comida que se envio del array menus(principal)
});

const reducer = createReducer(INITIAL_STATE, {
  // reducer toma es estado anterior y una accion, para devolver un nuevo estado
  [SEND_LIKE]: sendLike,
  [SEND_DISLIKE]: sendDislike
});

export default reducer;
