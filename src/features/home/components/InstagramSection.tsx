import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";

const InstagramSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <Heading level={1} size="lg" className="mb-2">
        Our Instagram
      </Heading>
      <Text size="base" color="text-black-600">
        Follow us on Instagram for daily inspiration and updates.
      </Text>

<button className="bg-[#FAF4F4] mt-6  text-black font-bold py-3 px-12 rounded-full shadow-2xl transition duration-300">
  Follow us
</button>

    </div>
  </section>
);

export default InstagramSection;