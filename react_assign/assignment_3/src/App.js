import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Rounting from "../src/router/Routing";
import { BrowserRouter } from "react-router-dom";

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
