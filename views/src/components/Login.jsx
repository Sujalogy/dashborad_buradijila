/* eslint-disable react/prop-types */
// import React from 'react';

function Login({ handleSubmit, username, password, setUsername, setPassword }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">प्रस्थान</button>
      </form>
    </>
  );
}

export default Login;
