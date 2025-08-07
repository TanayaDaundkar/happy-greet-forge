// Updated DesktopNavItem.tsx
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "./types";
import { useEffect, useRef } from "react";

interface DesktopNavItemProps {
  item: MenuItem;
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
}

export function DesktopNavItem({
  item,
  isActive,
  toggleSubmenu,
  openSubmenu,
}: DesktopNavItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (openSubmenu === item.title) {
          toggleSubmenu(item.title);
        }
      }
    };

    if (openSubmenu === item.title) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubmenu, item.title, toggleSubmenu]);

  const handleLinkClick = () => {
    // Close dropdown when any link is clicked
    if (openSubmenu === item.title) {
      toggleSubmenu(item.title);
    }
  };

  if (item.submenu) {
    return (
      <div className="relative group" ref={dropdownRef}>
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="flex items-center space-x-1 text-gray-700 hover:text-[#017ea6] transition-all duration-300 font-inter font-medium py-2 px-3 rounded-full hover:bg-gray-50"
        >
          <span>{item.title}</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-300" />
        </button>
        
        {openSubmenu === item.title && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 z-50 animate-fade-in">
            <div className="py-2">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.title}
                  to={subItem.path}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-gray-700 hover:text-[#f37c20] transition-all duration-300 font-inter hover:bg-gray-50"
                >
                  <div className="font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={`font-inter font-medium transition-all duration-300 py-2 px-3 rounded-full ${
        isActive(item.path)
          ? "text-[#017ea6] bg-gray-50"
          : "text-gray-700 hover:text-[#017ea6] hover:bg-gray-50"
      }`}
    >
      {item.title}
    </Link>
  );
}