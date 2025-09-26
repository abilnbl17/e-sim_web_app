import Card from "./ui/Card";

const ProductCard = ({ product }) => {
  return (
    // <div className="flex space-x-4">
    <Card>
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="text-2xl font-semibold">{product.name}</div>
        <div className="text-2xl font-semibold">{product.price}</div>
        <div className="">{product.despcription}</div>
      </div>
    </Card>
    // </div>
  );
};

export default ProductCard;
