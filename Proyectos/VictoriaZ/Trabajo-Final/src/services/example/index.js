// import createTodos from './todos';

// const exampleApi = {
//   todos: createTodos()
// };

import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/' // para no escribir cada vez la url
};

const exampleApi = () => {
  const { get } = create(config);

  const getUsers = params => get('api', params); // lo concatena con la baseUrl y recibe los datos de la pagina

  return {
    // en {} pq  estamos retornando un objeto con varias funciones
    getUsers
  };
};

export default exampleApi;
