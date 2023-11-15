import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">LOGO</Link>
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
