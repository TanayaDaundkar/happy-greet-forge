
import { Link, useLocation } from "react-router-dom";

interface HeaderLogoProps {
  scrolled?: boolean;
}

export function HeaderLogo({ scrolled = false }: HeaderLogoProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    // Use the new logo image for homepage navigation
    return (
      <Link to="/" className="flex items-center  group">
        <img 
          src="/lovable-uploads/736ebe79-2808-4654-b721-d4a030dcb4a0.png" 
          alt="Gurukul Code" 
          className={`w-auto transition-all duration-500 ease-in-out group-hover:scale-105 ${
            scrolled ? 'h-12' : 'h-16'
          }`}
        />
      </Link>
    );
  }

  // Image logo for all other pages
  return (
    <Link to="/" className="flex items-center ml-2 group">
      <img 
        src="/lovable-uploads/24ebd473-ae40-411b-81b9-6cc9fbd06f98.png" 
        alt="Gurukul Code" 
        className={`w-auto transition-all duration-500 ease-in-out group-hover:scale-105 ${
          scrolled ? 'h-12' : 'h-16'
        }`}
      />
    </Link>
  );
}
