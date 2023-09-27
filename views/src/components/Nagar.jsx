// import React from 'react'
import Header from "./Header";
import Linkers from "./Linkers";
import "../../public/scss/dashboard.css";
import NagarTable from "./pages/NagarTable";

function Nagar() {
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
          <div className="filtering"></div>
          <div className="table">
            <NagarTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nagar;
