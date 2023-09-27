// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import logo2 from "../../public/images/logo2.png";
import "../../public/scss/dashboard.css";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo2} alt="logo" className="logo" />
        </Link>
        <Link to="/">
          <img src={logo} alt="logo" className="logo2" />
        </Link>
        <button>Logout</button>
      </header>
    </>
  );
}

export default Header;
