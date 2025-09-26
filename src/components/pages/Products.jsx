import { Data } from "../../data/data";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 justify-center rounded-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {Data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
