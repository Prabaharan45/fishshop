import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "flex-end", // push links to the right
      alignItems: "center",
      padding: "15px 30px",
      background: "#0077b6"
    }}>
      <Link to="/" style={linkStyle}>About</Link>
      <Link to="/fishes" style={linkStyle}>Variety of Fishes</Link>
      <Link to="/feedback" style={linkStyle}>Feedback</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  marginLeft: "20px",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px"
};

export default Navbar;
