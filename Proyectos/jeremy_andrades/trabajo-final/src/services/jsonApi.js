import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/'
};

const createApi = () => {
  const { get } = create(config);
  const getUsers = () =>
    get('api/?inc=name,email,login,picture&results=50&format=json');

  return {
    getUsers
  };
};

export default createApi;
