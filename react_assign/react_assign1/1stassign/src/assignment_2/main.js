import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "../src/assignment_2/component/Footer";
import Header from "../src/assignment_2/component/Header";
import "../src/assignment_2/style/style.css";

import { BrowserRouter } from "react-router-dom";
import Rounting from "../src/assignment_2/pages/Rounting";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Rounting />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
