import { Shield, Menu, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the logo for better asset handling
import logo from "@/assets/WhatsApp Image 2025-09-17 at 22.26.02_c585d677.jpg";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className=" p-2 rounded-xl shadow-emergency">
              <img
                src={logo}
                alt="CampusSafe Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CampusSafe</h1>
              <p className="text-sm text-muted-foreground">Disaster Preparedness Platform</p>
            </div>
          </div>

          <nav
            className="hidden md:flex items-center space-x-6"
            aria-label="Main navigation"
          >
            <a href="#simulations" className="text-foreground hover:text-primary transition-colors">
              Simulations
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden sm:flex" aria-label="Student Login">
              <Users className="w-4 h-4 mr-2" />
              Student Login
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 transition-all shadow-emergency" aria-label="Admin Dashboard">
              <BarChart3 className="w-4 h-4 mr-2" />
              Admin Dashboard
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};