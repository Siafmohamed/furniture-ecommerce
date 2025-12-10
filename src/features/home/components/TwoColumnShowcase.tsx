
import ShowcaseItem from "./ShowcaseItem";

const TwoColumnShowcase = () => (
  <section className="container  bg-[#FAF4F4] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    
    <div className="grid md:grid-cols-2 gap-8">
      <ShowcaseItem title="Side table" imageUrl="https://placehold.co/400x300/E8E8E8/333?text=Side+Table+1" />
      <ShowcaseItem title="Side table" imageUrl="https://placehold.co/400x300/DCDCDC/333?text=Side+Table+2" />
    </div>
  </section>
);

export default TwoColumnShowcase;