import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";

const MidPageBanner = () => (
  <section className="py-16 sm:py-24 bg-[#FDF8E3] rounded-lg mb-16">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-3/5">
        <img
          src="https://placehold.co/700x400/FDF8E3/333?text=Asgaard+Sofa+Set"
          alt="Asgaard sofa set"
          className="w-full h-auto object-cover rounded-xl shadow-2xl"
        />
      </div>
      <div className="w-full lg:w-2/5 lg:pl-10 text-center lg:text-left">
        <Text size="sm" weight="medium" color="text-gray-600" className="uppercase tracking-widest">
          About Our Product
        </Text>
        <Heading level={2} size="3xl" className="mt-2">
          Asgaard sofa
        </Heading>
       <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
       Order now
    </button>
      </div>
    </div>
  </section>
);

export default MidPageBanner;