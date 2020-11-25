import React from "react";
import { link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <link to="/">Contact</link>
      <link to="/About">About</link>
    </div>
  ); 
};
export default Navbar;
