import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reg from "./componant/form/Reg";
import Footer from "./componant/functional_com/Footer";
import Header from "./componant/functional_com/Header";
import  "../src/design_css/design.css";


function App() {
  return (
    <div className="App">
     
     <Header/>
     <Reg/>
     <Footer/>
    </div>
  );
}

export default App;
