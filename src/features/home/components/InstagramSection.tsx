import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Button from "../../../components/atoms/Button/Button";

const InstagramSection = () => (
  <section className="py-16 bg-[#FDF9F4]">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <Heading level={2} size="2xl" className="mb-1">
        Our Instagram
      </Heading>
      <Text size="base" color="text-gray-700">
        Follow us on Instagram for daily inspiration and the latest furniture looks.
      </Text>
      <Button
        variant="secondary"
        className="mt-4 bg-[#FAF4F4] text-gray-900 border border-gray-200 shadow-md hover:bg-[#F4E8E8]"
      >
        Follow Us
      </Button>
    </div>
  </section>
);

export default InstagramSection;