import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";

const links = ["Home", "Shop", "About", "Contact"];
const helpItems = ["Payment Options", "Returns", "Privacy Policy", "Shipping"];

const FooterLinks = () => {
  return (
    <>
      <div>
        <Heading level={4} size="base" weight="bold" className="mb-4">
          Links
        </Heading>
        <ul className="space-y-3">
          {links.map((item) => (
            <li key={item}>
              <Text size="sm" color="text-gray-600" className="hover:text-amber-500 transition">
                <a href="#">{item}</a>
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Heading level={4} size="base" weight="bold" className="mb-4">
          Help
        </Heading>
        <ul className="space-y-3">
          {helpItems.map((item) => (
            <li key={item}>
              <Text size="sm" color="text-gray-600" className="hover:text-amber-500 transition">
                <a href="#">{item}</a>
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
