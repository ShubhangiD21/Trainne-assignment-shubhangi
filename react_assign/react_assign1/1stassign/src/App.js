import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "../src/assignment_4/Component/Footer";
import Header from "../src/assignment_4/Component/Header";
import "../src/assignment_4/style/style.css";

import { BrowserRouter } from "react-router-dom";
import Routing from "../src/assignment_4/Pages/Routing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
