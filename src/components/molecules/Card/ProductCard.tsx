import Card from "../Card/Card";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

type Product = {
  name: string;
  price: string;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4">
        <Text size="lg" weight="bold" className="truncate">
          {product.name}
        </Text>
        <Text size="xl" weight="normal" className="mt-1">
          Rs. {product.price}
        </Text>
        <Button variant="addToCart" className="mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;