import Card from "./ui/Card";

const ProductCard = ({ product }) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src={product.imageUrl}
            alt={product.name}
            // width={300}
            // height={200}
          />
        </div>

        <div className="flex-1">
          {" "}
          <div className="text-2xl font-semibold">{product.name}</div>
          <div className="text-xl font-semibold text-green-600">
            Rp{product.price.toLocaleString("id-ID")}
          </div>
          <div className="mt-2 text-gray-600">
            {product.description || product.despcription}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
