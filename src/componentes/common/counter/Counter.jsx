import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" onClick={restar}>
        -
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
