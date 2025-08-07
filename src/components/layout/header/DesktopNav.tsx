// Updated DesktopNav.tsx
import { Button } from "@/components/ui/button";
import { DesktopNavItem } from "./DesktopNavItem";
import { MenuItem } from "./types";
import { UserProfileMenu } from "./UserProfileMenu";
import { AIAgentsButton } from "@/components/ai/AIAgentsButton";
import { Link } from "react-router-dom"; // Add this import

interface DesktopNavProps {
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  handleLogin: () => void;
  handleSignup: () => void;
  user: any;
}

export function DesktopNav({
  menuItems,
  isActive,
  toggleSubmenu,
  openSubmenu,
  handleLogin,
  handleSignup,
  user,
}: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      {/* Logo outside the rounded nav */}
      <div className="flex-shrink-0 pl-4">
        <Link to="/" className="text-xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-[#f37c20] to-[#ff8c42]">
          Gurukul Code
        </Link>
      </div>

      {/* Rounded Navigation Area */}
      <div className="flex items-center justify-center flex-1 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-full px-6 py-1 border border-gray-200 shadow-sm">
        <nav className="flex items-center justify-center flex-1 space-x-4">
          {menuItems.map((item) => (
            <DesktopNavItem 
              key={item.title}
              item={item} 
              isActive={isActive}
              toggleSubmenu={toggleSubmenu}
              openSubmenu={openSubmenu}
            />
          ))}
        </nav>
      </div>
      
      {/* Auth buttons outside the rounded nav */}
      <div className="flex-shrink-0 pr-4">
        <div className="flex items-center space-x-3">
          {!user ? (
            <>
              <button
                onClick={handleLogin}
                className="bg-white/80 backdrop-blur-sm text-[#017ea6] px-6 py-2 rounded-full font-inter font-medium hover:bg-[#017ea6] hover:text-white transition-all duration-300 border border-[#017ea6]/30 hover:shadow-lg hover:shadow-[#017ea6]/20"
              >
                Log In
              </button>
              <button
                onClick={handleSignup}
                className="bg-gradient-to-r from-[#f37c20] to-[#ff8c42] text-white px-6 py-2 rounded-full font-inter font-medium hover:shadow-lg hover:shadow-[#f37c20]/30 transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </button>
            </>
          ) : (
            <UserProfileMenu />
          )}
        </div>
      </div>
    </div>
  );
}