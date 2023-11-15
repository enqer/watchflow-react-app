import React from "react";
import {Link} from "react-router-dom";
import logo from '../img/logo.png'

const Navbar = () => {
  return (
      <div>
        <ul>
          <li>
              <Link to="/"><img src={logo}></img></Link>
          </li>
          <li>
            <p>Search</p>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
  )
}

export default Navbar;
