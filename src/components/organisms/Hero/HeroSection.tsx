import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
const HeroSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FBEBB5] rounded-lg mb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div className="order-2 md:order-1">
          <Heading level={1} size="3xl" weight="bold" className="text-gray-900">
            Rocket single <br></br>seater
          </Heading>
        <Button variant="outline" className="mt-8">
          Shop Here
        </Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
         <img
    src="https://placehold.co/400x500/FDF8E3/333?text=Armchair+Image"
       alt="Rocket single seater armchair"
    className="w-full h-auto object-cover"
  />
       </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
