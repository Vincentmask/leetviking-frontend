import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div >
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}


export default App;
