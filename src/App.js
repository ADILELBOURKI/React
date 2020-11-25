import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";


class App extends Component {
  render() {
    return (
  <BrowserRouter>
        <Navbar />
        <Home />
        <About />
       </BrowserRouter>
    );
  }
}

export default App;
