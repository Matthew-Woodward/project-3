import React from "react";
import "./Navbar";
import "./Navbar.css"

const Navbar = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Code Adventures</a>
        <button type="button" className="btn btn-warning">Contact Us</button>
        <button type="button" className="btn btn-primary">Log In</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
        </div>
      </nav>
    )
}

export default Navbar;