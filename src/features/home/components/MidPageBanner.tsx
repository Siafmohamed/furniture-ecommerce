import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Button from "../../../components/atoms/Button/Button";

const MidPageBanner = () => (
  <section className="bg-[#FDF5DE]">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-3/5">
        <img
          src="https://placehold.co/720x420/FDF5DE/333?text=Asgaard+sofa+set"
          alt="Asgaard sofa set"
          className="w-full h-auto object-cover rounded-xl shadow-2xl"
        />
      </div>
      <div className="w-full lg:w-2/5 lg:pl-10 text-center lg:text-left space-y-4">
        <Text
          size="sm"
          weight="medium"
          color="text-gray-600"
          className="uppercase tracking-[0.3em]"
        >
          New Arrivals
        </Text>
        <Heading level={2} size="3xl">
          Asgaard sofa
        </Heading>
        <Text size="base" color="text-gray-700">
          An inviting modular sofa that combines soft cushions with a clean
          Scandinavian frame to anchor your living room.
        </Text>
        <Button variant="outline" className="mt-4 w-40 justify-center">
          Order Now
        </Button>
      </div>
    </div>
  </section>
);

export default MidPageBanner;