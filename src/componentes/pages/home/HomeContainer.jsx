import { useState } from "react";

const HomeContainer = () => {
  const [items, setItems] = useState([]);

  const getProducts = new Promise((res, rej) => {
    let isLoged = false;
    if (isLoged) {
      res(products);
    } else {
      rej({ message: "algo salio mal" });
    }
  });

  getProducts
    .then((response) => {
      console.log("entro en el then ", response);
    })
    .catch((error) => {
      console.log("entro en el catch ", error);
    });

  console.log(items);

  return items;
};

export default HomeContainer;
