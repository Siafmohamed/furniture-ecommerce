import React from "react";
import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Button from "../../../components/atoms/Button/Button";
import ProductCard from "../../../components/molecules/Card/ProductCard";

const products = [
  { id: 1, name: "Syltherine", price: "40,000.00", imageUrl: "https://placehold.co/300x200/F0E68C/333?text=Product+1" },
  { id: 2, name: "Leviosa", price: "25,000.00", imageUrl: "https://placehold.co/300x200/D2B48C/333?text=Product+2" },
  { id: 3, name: "Levo Table", price: "18,000.00", imageUrl: "https://placehold.co/300x200/C0C0C0/333?text=Product+3" },
  { id: 4, name: "Rayan Sofa", price: "35,000.00", imageUrl: "https://placehold.co/300x200/A9A9A9/333?text=Product+4" },
];

const FeaturedProducts = () => (
  <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-12">
      <Heading level={2} size="3xl">
        Top Picks For You
      </Heading>
      <Text size="base" color="text-gray-600" className="mt-2">
        Browse our selection of the most popular items this season.
      </Text>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
    <div className="text-center mt-10">
      <Button variant="outline">
        View All Products
      </Button>
    </div>
  </section>
);

export default FeaturedProducts;