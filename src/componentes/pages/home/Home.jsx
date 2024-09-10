import ProductCard from "../../common/productCard/ProductCard";
import "./home.css";

const Home = () => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <ProductCard titulo="Mesa" precio="50000" />
      <ProductCard titulo="Silla" precio="20000" />
      <ProductCard titulo="Placard" precio="60000" />
      <ProductCard titulo="Escritorio" precio="55000" />
    </div>
  );
};

export default Home;
