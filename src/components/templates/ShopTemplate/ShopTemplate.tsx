import React from "react";
import ShopHero from "../../organisms/ShopHero/ShopHero";

type ShopTemplateProps = {
  heroTitle: string;
  heroSubtitle?: string;
  toolbar: React.ReactNode;
  products: React.ReactNode;
  pagination?: React.ReactNode;
  afterContent?: React.ReactNode;
};

const ShopTemplate: React.FC<ShopTemplateProps> = ({
  heroTitle,
  heroSubtitle,
  toolbar,
  products,
  pagination,
  afterContent,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f3ef] via-white to-[#f7f3ef] text-gray-900">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <section className="pt-8">
          <ShopHero title={heroTitle} subtitle={heroSubtitle} />
        </section>

        <section className="mt-8 space-y-6">
          {toolbar}
          {products}
          {pagination && <div className="flex justify-center">{pagination}</div>}
        </section>

        {afterContent && <section className="mt-12">{afterContent}</section>}
      </main>
    </div>
  );
};

export default ShopTemplate;

