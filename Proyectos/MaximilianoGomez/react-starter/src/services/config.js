import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/'
};

const createApi = () => {
  const { get } = create(config);
  const getUsers = () => get();

  return {
    getUsers
  };
};

export default createApi;
