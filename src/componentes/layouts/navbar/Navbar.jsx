import CartWidget from "../../common/cartWidget/CartWidget";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      <Link to={"/"}>The Workerrs</Link>
      <ul>
        <li>
          <Link>Interior</Link>
        </li>
        <li>
          <Link>Exterior</Link>
        </li>
        <li>
          <Link>Madera</Link>
        </li>
      </ul>

      <button className="button-light" onClick={toggleMode}>
        <LightModeIcon />
      </button>

      <Link>Que se yo</Link>
      <CartWidget />
    </div>
  );
};

export default Navbar;
