import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default Router;
