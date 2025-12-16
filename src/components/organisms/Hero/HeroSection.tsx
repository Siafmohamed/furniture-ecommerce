import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 items-center gap-10">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6">
          <Text
            size="sm"
            weight="medium"
            color="text-gray-700"
            className="tracking-[0.3em] uppercase"
          >
            New Arrivals
          </Text>
          <Heading
            level={1}
            size="3xl"
            weight="bold"
            className="text-gray-900 leading-tight"
          >
            Rocket single
            <br />
            seater
          </Heading>
          <Text size="base" color="text-gray-700" className="max-w-md">
            Experience comfort and style with our modern single seater that fits
            perfectly into any cozy corner of your home.
          </Text>
          <Button variant="outline" className="mt-4 w-40 justify-center">
            Shop Now
          </Button>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="rounded-xl shadow-2xl overflow-hidden w-full max-w-md bg-[#FDF8E3]">
            <img
              src="https://placehold.co/430x520/FDF8E3/333?text=Rocket+Seater"
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
