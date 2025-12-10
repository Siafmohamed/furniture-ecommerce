import React from 'react';
import ProductCard from "../../molecules/Card/ProductCard";

interface Product {
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  return (
    <section className="px-6 lg:px-24 py-12">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <div key={product.name} className="min-w-[250px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;