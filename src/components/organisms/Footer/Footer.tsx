import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import Text from "../../atoms/Text/Text";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-10 mb-6">
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold tracking-wider text-gray-900 mb-4">Funiro.</div>
        <Text size="sm" color="text-gray-600">
  400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
       </Text>
          </div>
          <FooterLinks />
          <FooterSocial />
        </div>

    <Text size="sm" color="text-gray-500" className="text-center">
  2023 Funiro. All rights reserved
   </Text>
      </div>
    </footer>
  );
};

export default Footer;
