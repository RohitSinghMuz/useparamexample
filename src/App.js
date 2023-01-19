import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Pageone from "./Pageone";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pageone />} />
          <Route path="/home/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
