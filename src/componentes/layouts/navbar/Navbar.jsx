import CartWidget from "../../common/cartWidget/CartWidget";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      <h3>The Workerrs</h3>

      <ul>
        <li>Interior</li>
        <li>Exterior</li>
        <li>Madera</li>
      </ul>

      <button className="button-light" onClick={toggleMode}>
        <LightModeIcon />
      </button>

      <CartWidget />
    </div>
  );
};

export default Navbar;
