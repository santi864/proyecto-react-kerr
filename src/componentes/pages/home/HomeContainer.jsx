import { useState, useEffect } from "react";
import { products } from "../../../products";
import Home from "./Home";
import { useParams } from "react-router-dom";

const HomeContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, [categoryName]);

  return <Home items={items} />;
};

export default HomeContainer;
