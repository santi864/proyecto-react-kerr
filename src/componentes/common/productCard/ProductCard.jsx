import "./productCard.css";
import Button from "@mui/material/Button";

// import { Logo } from "../../../assets/logo.avif";

const ProductCard = (props) => {
  const { titulo, precio } = props;

  return (
    <div className="card">
      <img className="card-image" src="" alt="" />
      <h2 className="card-title">{titulo}</h2>
      <p className="card-text">{precio}</p>
      <Button variant="contained" size="small">
        Comprar
      </Button>
    </div>
  );
};

export default ProductCard;
