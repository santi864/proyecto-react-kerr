import ProductCard from "../../common/productCard/ProductCard";
import "./home.css";
import HomeContainer from "./HomeContainer";
import { useParams } from "react-router-dom";

const Home = ({ items }) => {
  const x = useParams();
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <h1>Nuestros productos</h1>
      <ProductCard titulo="Mesa" precio="$50000" />
      <ProductCard titulo="Silla" precio="$20000" />
      <ProductCard titulo="Placard" precio="$60000" />
      <ProductCard titulo="Escritorio" precio="$55000" />
      <ProductCard titulo="Estanteria" precio="$55000" />
      <ProductCard titulo="Gazeboo" precio="$150000" /> */
    </div>
  );
};

export default Home;
