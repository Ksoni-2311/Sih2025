import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl">CampusSafe</h3>
                <p className="text-primary-foreground/80 text-sm">Disaster Preparedness</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm">
              Empowering educational institutions across India with comprehensive disaster 
              preparedness training and emergency response capabilities.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2 text-sm">
              <a href="#simulations" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Disaster Simulations
              </a>
              <a href="#resources" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Emergency Resources
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Admin Dashboard
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Training Modules
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Certification
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                NDMA Guidelines
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Emergency Contacts
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Training Materials
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Best Practices
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Help Center
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">support@campussafe.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+91 1800-123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-primary-foreground/80">
                  New Delhi, India<br />
                  Ministry of Education Partnership
                </span>
              </div>
            </div>
            
            <Button className="mt-4 bg-white text-primary hover:bg-white/90">
              Emergency Hotline: 112
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">
            © 2024 CampusSafe. Built in partnership with NDMA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};