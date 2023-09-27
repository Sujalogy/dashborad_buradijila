// import React from 'react'
import Header from "./Header";
import Linkers from "./Linkers";
import "../../public/scss/dashboard.css";

function Basti() {
  return (
    <>
      <Header />
      <div className="mains">
        <div className="aside">
          <div className="filters">
            <Linkers />
          </div>
        </div>
        <div className="body">
            <h1>Table ALL</h1>
        </div>
      </div>
    </>
  );
}

export default Basti;
