import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "./types";

interface MobileNavItemProps {
  item: MenuItem;
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileNavItem({ 
  item, 
  isActive, 
  toggleSubmenu, 
  openSubmenu,
  setIsOpen 
}: MobileNavItemProps) {
  const handleLinkClick = () => {
    setIsOpen(false);
    if (openSubmenu === item.title) {
      toggleSubmenu(item.title);
    }
  };

  const handleSubmenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div key={item.title} className="py-1">
      {item.submenu ? (
        <div>
          <button
            onClick={() => toggleSubmenu(item.title)}
            className="flex items-center justify-between w-full text-left px-3 py-3 rounded-full text-gray-700 font-lexend font text-base transition-colors duration-200 hover:bg-gray-50 hover:text-[#017ea6]"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openSubmenu === item.title ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSubmenu === item.title && (
            <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#F57E20] bg-white rounded-md">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.title}
                  to={subitem.path}
                  className="block px-3 py-2 rounded-full text-sm text-gray-700 font-lexend transition-colors duration-200 hover:bg-gray-50 hover:text-[#F57E20]"
                  onClick={handleSubmenuClick}
                >
                  {subitem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.path}
          className={`block px-3 py-3 rounded-full transition-colors duration-200 font-lexend font text-base text-gray-700 hover:bg-gray-50 hover:text-[#017ea6] ${
            isActive(item.path) 
              ? "bg-gray-50 text-[#56C7DF]"
              : ""
          }`}
          onClick={handleLinkClick}
        >
          {item.title}
        </Link>
      )}
    </div>
  );
}
