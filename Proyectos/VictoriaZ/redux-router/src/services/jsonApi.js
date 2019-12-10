import { create } from 'apisauce';

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com/' // para no escribir cada vez la url
};

const createApi = () => {
  const { get } = create(config);

  const getUsers = () => get('users'); // lo concatena con la baseUrl y recibe los datos de la pagina

  return {
    // en {} pq  estamos retornando un objeto con varias funciones
    getUsers
  };
};

export default createApi;
