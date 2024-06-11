import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-link" to={"/"}>
          Home
        </Link>
        <Link className="navbar-link" to={"/classic"}>
          Classic mode
        </Link>
        <Link className="navbar-link" to={"/login"}>
          Login
        </Link>
        <Link className="navbar-link" to={"/contact"}>
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
