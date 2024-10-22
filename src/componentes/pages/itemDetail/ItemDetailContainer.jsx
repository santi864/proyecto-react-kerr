import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
