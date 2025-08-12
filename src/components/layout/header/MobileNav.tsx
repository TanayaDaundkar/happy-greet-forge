import { Button } from "@/components/ui/button";
import { MobileNavItem } from "./MobileNavItem";
import { MenuItem } from "./types";
import { 
  Sheet,
  SheetContent,
  SheetHeader
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase"; // ✅ adjust path if needed

interface MobileNavProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  setIsOpen: (isOpen: boolean) => void;
  handleLogin: () => void;
  handleSignup: () => void;
  user: any;
}

export function MobileNav({ 
  isOpen, 
  menuItems, 
  isActive, 
  toggleSubmenu, 
  openSubmenu,
  setIsOpen,
  handleLogin,
  handleSignup,
  user
}: MobileNavProps) {
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setIsOpen(false);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out."
      });
    } catch (error: any) {
      console.error("Error signing out:", error.message);
      toast({
        title: "Logout failed",
        description: error.message || "An error occurred during logout.",
        variant: "destructive"
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 bg-white border-none" >
        <SheetHeader className="border-b p-4 bg-white">
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X size={18} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>
        <div className="px-4 py-5 space-y-3 subtle-scroll max-h-[calc(100vh-4rem)] overflow-y-auto bg-white">
          {menuItems.map((item) => (
            <MobileNavItem
              key={item.title}
              item={item}
              isActive={isActive}
              toggleSubmenu={toggleSubmenu}
              openSubmenu={openSubmenu}
              setIsOpen={setIsOpen}
            />
          ))}
            {user ? (
              <div className="pt-4 border-t-0">
                <div className="text-sm font-medium mb-2 font-lexend">
                  Signed in as {user.email}
                </div>
                <Button 
                  className="w-full font-lexend font-bold"
                
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                {<Button
                  
                  className="w-full font-lexend font-bold text-base py-3 border border-[#036D9B] text-[#036D9B] bg-white rounded-full hover:bg-[#036D9B] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    handleLogin();
                    setIsOpen(false);
                  }}
                >
                  Log in
                </Button>}

                <Button className="w-full bg-gradient-to-r from-[#f37c20] to-[#ff8c42] text-white text-base py-3 rounded-full font-inter font-medium hover:shadow-lg hover:shadow-[#f37c20]/30 transition-all duration-300 hover:scale-105" onClick={() => {
                  handleSignup();
                  setIsOpen(false);
                }} style={{ backgroundColor: '#F57E20' }}>
                  Start Your Journey
                </Button>
              </>
            )}
          </div>
      </SheetContent>
    </Sheet>
  );
}
