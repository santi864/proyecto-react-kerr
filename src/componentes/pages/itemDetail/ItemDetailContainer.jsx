import React, { useState } from "react";
import ItemDetail from "./itemDetail";
import { useEffect } from "react";
import { products } from "../../../products";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const id = "1";

  useEffect(() => {
    let product = products.find((product) => product.id === id);

    if (product) {
      setItem(product);
    }
  }, []);

  return <ItemDetail />;
};

export default ItemDetailContainer;
