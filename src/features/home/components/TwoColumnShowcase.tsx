
import ShowcaseItem from "./ShowcaseItem";

const TwoColumnShowcase = () => (
  <section className="bg-[#FBEDED]">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
      <ShowcaseItem
        title="Side table"
        subtitle="New modern"
        imageUrl="https://placehold.co/430x320/F9E4E4/333?text=Side+table"
      />
      <ShowcaseItem
        title="Side table"
        subtitle="Minimalist"
        imageUrl="https://placehold.co/430x320/F4DADA/333?text=Single+seater"
      />
    </div>
  </section>
);

export default TwoColumnShowcase;