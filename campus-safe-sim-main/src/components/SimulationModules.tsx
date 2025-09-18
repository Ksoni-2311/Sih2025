import { 
  Zap, 
  Droplets, 
  Flame, 
  Wind, 
  Mountain, 
  Users, 
  Clock, 
  Trophy,
  Play,
  ArrowRight 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const simulations = [
  {
    id: "earthquake",
    title: "Earthquake Response",
    description: "Learn drop, cover, and hold techniques. Practice evacuation routes and post-earthquake safety protocols.",
    icon: Zap,
    difficulty: "Beginner",
    duration: "15 min",
    participants: "1-30",
    bgColor: "bg-gradient-hero",
    scenarios: ["Classroom drill", "Outdoor assembly", "Building evacuation"]
  },
  {
    id: "flood",
    title: "Flood Management", 
    description: "Understand flood warning signs, safe evacuation procedures, and emergency communication protocols.",
    icon: Droplets,
    difficulty: "Intermediate",
    duration: "20 min", 
    participants: "1-25",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    scenarios: ["Early warning response", "Safe route planning", "Emergency supplies"]
  },
  {
    id: "fire",
    title: "Fire Emergency",
    description: "Fire safety protocols, evacuation procedures, and proper use of fire safety equipment.",
    icon: Flame,
    difficulty: "Advanced",
    duration: "25 min",
    participants: "1-20", 
    bgColor: "bg-gradient-warning",
    scenarios: ["Fire detection", "Evacuation routes", "Fire extinguisher use"]
  },
  {
    id: "cyclone",
    title: "Cyclone Preparedness",
    description: "Cyclone safety measures, shelter protocols, and post-storm recovery procedures.",
    icon: Wind,
    difficulty: "Intermediate", 
    duration: "18 min",
    participants: "1-35",
    bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
    scenarios: ["Pre-storm preparation", "Shelter procedures", "Communication plan"]
  },
  {
    id: "landslide",
    title: "Landslide Safety",
    description: "Recognize landslide warning signs, evacuation procedures, and safe zone identification.",
    icon: Mountain,
    difficulty: "Beginner",
    duration: "12 min",
    participants: "1-25",
    bgColor: "bg-gradient-to-br from-amber-600 to-orange-600", 
    scenarios: ["Warning signs", "Quick evacuation", "Safe areas"]
  },
  {
    id: "multi-hazard",
    title: "Multi-Hazard Drill",
    description: "Comprehensive emergency response combining multiple disaster scenarios for advanced training.",
    icon: Users,
    difficulty: "Expert",
    duration: "45 min",
    participants: "10-50",
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
    scenarios: ["Sequential emergencies", "Resource management", "Coordination skills"]
  }
];

export const SimulationModules = () => {
  return (
    <section id="simulations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Disaster Simulations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage in realistic emergency scenarios designed specifically for Indian educational institutions. 
            Each simulation includes region-specific protocols and gamified learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simulations.map((simulation) => {
            const IconComponent = simulation.icon;
            return (
              <Card key={simulation.id} className="group hover:shadow-emergency transition-all duration-300 overflow-hidden">
                <div className={`${simulation.bgColor} p-6 relative`}>
                  <div className="flex items-center justify-between text-white mb-4">
                    <IconComponent className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {simulation.difficulty}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{simulation.title}</h3>
                  <p className="text-white/90 text-sm">{simulation.description}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {simulation.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {simulation.participants}
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      Certified
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Scenarios Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {simulation.scenarios.map((scenario, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {scenario}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-hero hover:opacity-90 group-hover:scale-105 transition-all">
                    <Play className="w-4 h-4 mr-2" />
                    Start Simulation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Simulations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};