// import React from 'react'
import { Link } from "react-router-dom";

function Linkers() {
  return (
    <>
      <h1>सूची</h1>
      <div className="links">
        <Link to="/Purnsuchi">Purnsuchi</Link>
        <Link to="/Nagar">Nagar</Link>
        <Link to="/Mandal">Mandal</Link>
        <Link to="/Basti">Basti</Link>
      </div>
    </>
  );
}

export default Linkers;
