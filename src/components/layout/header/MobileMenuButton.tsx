
import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  toggleMenu: () => void;
}

export function MobileMenuButton({ toggleMenu }: MobileMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden focus:outline-none p-2 rounded-md bg-transparent hover:bg-gray-100 transition-colors"
      aria-label="Open menu"
    >
      <Menu size={24} className="text-black"/>
    </button>
  );
}
