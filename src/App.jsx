import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Router from "./Router";

function App() {

  return (
    <>
      <Header></Header>
      <Router />
    </>
  );
}

export default App;
