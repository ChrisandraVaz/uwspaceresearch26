import wsrtLogo from "./assets/wsrtlogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div id="navbar-logo">
            <Link to="/">
              <img src={wsrtLogo}></img>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/about">
              <div className="navbar-link">About</div>
            </Link>
            <Link to="/projects">
              <div className="navbar-link">Projects</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
