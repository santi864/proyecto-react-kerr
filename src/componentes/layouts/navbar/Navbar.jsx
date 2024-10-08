import CartWidget from "../../common/cartWidget/CartWidget";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "./categories";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      <Link to={"/"}>The Workerrs</Link>
      <ul>
        {/* <li>
          <Link>Interior</Link>
        </li>
        <li>
          <Link>Exterior</Link>
        </li>
        <li>
          <Link>Madera</Link>
        </li> */}

        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>

      <button className="button-light" onClick={toggleMode}>
        <LightModeIcon />
      </button>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
