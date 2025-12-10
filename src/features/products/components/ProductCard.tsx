import React from "react";
import Card from "../../../components/molecules/Card/Card"; // Use your reusable Card component
import Text from "../../../components/atoms/Text/Text"; // Optional: reusable Text component
import Button from "../../../components/atoms/Button/Button";

type Product = {
  name: string;
  price: string;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-4">
      <Text size="lg" weight="bold" className="truncate">{product.name}</Text>
      <Text size="xl" weight="semibold" className="mt-1">Rs. {product.price}</Text>
      <Button variant="addToCart" className="mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
        Add to Cart
      </Button>
    </div>
  </Card>
);

export default ProductCard;