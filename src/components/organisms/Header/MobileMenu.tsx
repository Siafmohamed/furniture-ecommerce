import { navItems } from "./navItems";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center text-white">
      <button onClick={onClose} className="absolute top-4 right-4 text-3xl">×</button>
      <ul className="space-y-6 text-2xl">
        {navItems.map((item) => (
          <li key={item}><a href="#" onClick={onClose}>{item}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
