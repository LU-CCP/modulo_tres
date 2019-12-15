import { create } from 'apisauce';

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com/'
};
const createApi = () => {
  const { get } = create(config);
  const getUsers = () => get('users');

  return {
    getUsers
  };
};

export default createApi;
