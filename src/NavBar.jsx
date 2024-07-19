import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link className="NavBar-link"
                  to="/">HOME</Link>
            <Link className="NavBar-link"
                  to="/sourpatch">Sourpatch</Link>
            <Link className="NavBar-link"
                  to="/drpepper">Dr. Pepper</Link>
            <Link className="NavBar-link"
                  to="/cheetos">Cheetos</Link>
        </nav>
    )
};
export default NavBar;