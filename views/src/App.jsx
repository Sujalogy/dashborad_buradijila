// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Purnsuchi from "./components/Purnsuchi";
import Nagar from "./components/Nagar";
import Mandal from "./components/Mandal";
import Basti from "./components/Basti";
import Master from "./components/Master";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/Purnsuchi" element={<Purnsuchi />} />
        <Route path="/Nagar" element={<Nagar />} />
        <Route path="/Mandal" element={<Mandal />} />
        <Route path="/Basti" element={<Basti />} />
      </Routes>
    </Router>
  );
}

export default App;
