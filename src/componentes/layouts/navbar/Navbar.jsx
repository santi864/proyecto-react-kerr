import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      <h3>The Workerrs</h3>

      <ul>
        <li>Interior</li>
        <li>Exterior</li>
        <li>Madera</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
