import React from "react";
import "./Navbar";
import "./Navbar.css"

const Navbar = props => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Code Adventures</a>
        <button type="button" class="btn btn-warning">Contact Us</button>
        <button type="button" class="btn btn-primary">Log In</button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
        </div>
      </nav>
    )
}

export default Navbar;