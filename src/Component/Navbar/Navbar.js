import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </Router>
    </div>
  );
};
export default Navbar;
