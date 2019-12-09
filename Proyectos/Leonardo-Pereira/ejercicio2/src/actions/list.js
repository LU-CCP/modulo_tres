// ACA SE DEFINEN LAS ACCIONES!!

import { createActions } from 'reduxsauce'; // importamos Crate actions  de redux, para crear las acciones

const { Types, Creators } = createActions(
  // definimos las acciones, Types y Creators son objetos
  {
    sendLike: ['index'], // le especificamos un indice a la accion para manipularla mas tarde
    sendDislike: ['index']
  },
  {
    prefix: 'LIST/' // le espesificamos un prefijo de tipo lista
  }
);

const { sendLike, sendDislike } = Creators; // destructuramos los objetos para obtener sus propiedades

const { SEND_LIKE, SEND_DISLIKE } = Types; // Types tiene los mismos nombres que Creators pero en mayusculas

// tambien inserta un guion bajo entre palabras compuestas
export { sendLike, sendDislike, SEND_LIKE, SEND_DISLIKE }; // exportamos nuestras propiedades destructuradas
