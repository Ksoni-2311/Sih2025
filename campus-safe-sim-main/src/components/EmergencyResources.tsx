import { 
  Phone, 
  FileText, 
  Download, 
  ExternalLink, 
  AlertCircle,
  Shield,
  BookOpen,
  Users,
  Map,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const emergencyContacts = [
  { service: "National Emergency", number: "112", description: "All emergencies" },
  { service: "Fire Service", number: "101", description: "Fire emergencies" },
  { service: "Police", number: "100", description: "Police assistance" },
  { service: "Medical Emergency", number: "108", description: "Ambulance service" },
  { service: "Disaster Management", number: "1078", description: "NDMA helpline" },
  { service: "Women Helpline", number: "1091", description: "Women safety" }
];

const resources = [
  {
    category: "Emergency Protocols",
    icon: Shield,
    color: "bg-gradient-hero",
    items: [
      "Earthquake Response Checklist",
      "Fire Evacuation Procedures", 
      "Flood Safety Guidelines",
      "First Aid Emergency Steps"
    ]
  },
  {
    category: "Training Materials",
    icon: BookOpen,
    color: "bg-gradient-safety",
    items: [
      "Student Safety Handbook",
      "Teacher Training Module",
      "Parent Awareness Guide",
      "Video Training Series"
    ]
  },
  {
    category: "Communication Tools",
    icon: Users,
    color: "bg-gradient-warning",
    items: [
      "Emergency Contact Templates",
      "Alert Message Formats",
      "Parent Notification System",
      "Social Media Crisis Guide"
    ]
  },
  {
    category: "Assessment Tools",
    icon: FileText,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    items: [
      "Preparedness Assessment Quiz",
      "Drill Performance Report",
      "Risk Assessment Checklist",
      "Improvement Action Plans"
    ]
  }
];

export const EmergencyResources = () => {
  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Emergency Resources & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive emergency resources, contact information, and downloadable materials 
            to enhance your institution's disaster preparedness capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Emergency Contacts</h3>
              </div>

              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold text-foreground">{contact.service}</div>
                      <div className="text-sm text-muted-foreground">{contact.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{contact.number}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6 bg-gradient-hero hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Download Contact List
              </Button>
            </Card>
          </div>

          {/* Resource Categories */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="group hover:shadow-emergency transition-all duration-300">
                    <div className={`${category.color} p-4`}>
                      <div className="flex items-center space-x-3 text-white">
                        <IconComponent className="w-6 h-6" />
                        <h3 className="font-bold text-lg">{category.category}</h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="space-y-3">
                        {category.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between group/item">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground group-hover/item:text-primary transition-colors">
                                {item}
                              </span>
                            </div>
                            <Button size="sm" variant="ghost" className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <Download className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full mt-4">
                        View All Resources
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="mt-12">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-4">
                <div className="bg-gradient-hero p-4 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground">Evacuation Maps</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive evacuation route maps for different disaster scenarios
                </p>
                <Button variant="outline">
                  Generate Maps
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-safety p-4 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground">Risk Assessment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Evaluate your institution's current preparedness level
                </p>
                <Button variant="outline">
                  Start Assessment
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-warning p-4 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground">Drill Scheduler</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule and manage regular emergency drills
                </p>
                <Button variant="outline">
                  Schedule Drills
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};