import { Play, Users, BookOpen, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-disaster-prep.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-2 text-primary-glow">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Disaster Preparedness Education</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Prepare Today,
              <span className="text-primary-glow"> Save Lives</span> Tomorrow
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg">
              Interactive disaster simulation platform for Indian schools and colleges. 
              Train students and staff with region-specific emergency protocols through 
              gamified learning experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-safety hover:scale-105 transition-all shadow-glow text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Simulation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Resources
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">50K+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-white/80">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">28</div>
                <div className="text-sm text-white/80">States Covered</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-safety p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-semibold mb-2">Virtual Drill System</h3>
                  <p className="text-white/80 text-sm">
                    Conduct realistic emergency drills with real-time feedback and performance tracking.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-warning p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-semibold mb-2">Region-Specific Alerts</h3>
                  <p className="text-white/80 text-sm">
                    Localized disaster information and emergency protocols for your specific region.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};