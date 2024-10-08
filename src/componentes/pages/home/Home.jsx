import ProductCard from "../../common/productCard/ProductCard";
import "./home.css";

const Home = ({ items }) => {
  // const x = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Home;
