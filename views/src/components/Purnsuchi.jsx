// import React from 'react'
import Header from "./Header";
import Linkers from "./Linkers";
import "../../public/scss/dashboard.css";
import Tableall from "./pages/Tableall";

function Purnsuchi() {
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
            <Tableall/>
        </div>
      </div>
    </>
  );
}

export default Purnsuchi;
