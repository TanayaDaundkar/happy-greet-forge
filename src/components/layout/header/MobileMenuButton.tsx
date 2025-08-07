
import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  toggleMenu: () => void;
}

export function MobileMenuButton({ toggleMenu }: MobileMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden text-foreground focus:outline-none p-2 rounded-md hover:bg-muted/80 transition-colors"
      aria-label="Open menu"
    >
      <Menu size={24} />
    </button>
  );
}
