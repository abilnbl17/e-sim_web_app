import { Data } from "../../data/data";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <div className="flex space-x-4 justify-center rounded-4xl">
      {Data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
export default Products;
