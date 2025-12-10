import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Icon from "../../atoms/Icon/Icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    // Navigate to the combined auth page
    navigate("/auth/combined");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBEBB5] shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold tracking-wider text-gray-800">Funiro.</div>
        <Navigation />
        <div className="flex items-center space-x-6">
          <Icon name="Search" size="medium" className="text-gray-600 hover:text-amber-500 transition duration-150" />
          <button 
            onClick={handleUserIconClick}
            className="cursor-pointer"
            aria-label="User account"
          >
            <Icon name="User" size="medium" className="text-gray-600 hover:text-amber-500 transition duration-150" />
          </button>
          <Icon name="ShoppingCart" size="medium" className="text-gray-600 hover:text-amber-500 transition duration-150" />
        </div>
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <span>☰</span>
        </button>
        {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;