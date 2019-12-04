import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/'
};

const RandomUsers = () => {
  const { get } = create(config);
  const getUsers = () => get();

  return {
    getUsers
  };
};

export default RandomUsers;
