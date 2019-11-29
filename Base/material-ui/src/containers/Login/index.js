import React from 'react';

const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <p>User</p>
    <input />
    <p>Password</p>
    <input type='password' />
    <button>Login</button>
  </div>
);

export default Home;
