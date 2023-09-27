/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

function Master() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("authToken", token);
        setToken(token);
        const authorizedHeaders = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const responseD = await fetch("http://localhost:3000/login", {
          method: "GET",
          headers: authorizedHeaders,
        });
        if (responseD.ok) {
          const data = await response.json();
          const { token } = data;
          console.log(data);
          setAuthenticated(data.status);
          setLoginStatus("success");
          console.log("Login successful");
        } else {
          setAuthenticated(data.status);
        }
      } else {
        setLoginStatus("failed");
        setAuthenticated(false);
        console.error("Login failed");
      }
    } catch (error) {
      setAuthenticated(false);
      console.error("An error occurred:", error);
    }
  };

  return (
      <>
        {/* {authenticated ? ( */}
        <Dashboard />
        {/* ) : (
        <Login
          handleSubmit={handleSubmit}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )} */}
      </>
    
  );
}

export default Master;
