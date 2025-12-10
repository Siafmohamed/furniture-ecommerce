import { navItems } from "./navItems";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
    {navItems.map((item) => (
      <Link key={item.name} to={item.path} className="text-black hover:text-amber-500 transition">
        {item.name}
      </Link>
    ))}
  </nav>
);

export default Navigation;
