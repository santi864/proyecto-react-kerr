import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Badge
        badgeContent={cart.length}
        color="primary"
        max={50}
        showZero={true}
      >
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
