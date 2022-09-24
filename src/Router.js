import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainSlide from "./components/MainSlide";
import StayDetail from "./pages/StayDetail/StayDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/StayDetail" element={<StayDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
