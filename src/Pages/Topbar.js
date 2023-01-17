import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
function Topbar() {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <Link to="/" className="btn btn-info btn-sm">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;
