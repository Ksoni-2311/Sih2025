import { MapPin, AlertTriangle, Info, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const regions = [
  {
    name: "Northern Plains",
    states: ["Punjab", "Haryana", "UP", "Bihar"],
    riskLevel: "Medium",
    primaryThreats: ["Floods", "Earthquake"],
    color: "bg-warning",
    stats: { institutions: 156, drills: "2.3K" }
  },
  {
    name: "Western Region", 
    states: ["Rajasthan", "Gujarat", "Maharashtra"],
    riskLevel: "High",
    primaryThreats: ["Earthquake", "Cyclone", "Drought"],
    color: "bg-danger",
    stats: { institutions: 203, drills: "3.1K" }
  },
  {
    name: "Southern Peninsula",
    states: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
    riskLevel: "High", 
    primaryThreats: ["Cyclone", "Floods", "Tsunami"],
    color: "bg-danger",
    stats: { institutions: 189, drills: "2.8K" }
  },
  {
    name: "Eastern Region",
    states: ["West Bengal", "Odisha", "Jharkhand"],
    riskLevel: "Very High",
    primaryThreats: ["Cyclone", "Floods", "Earthquake"],
    color: "bg-gradient-to-r from-red-500 to-red-600",
    stats: { institutions: 134, drills: "1.9K" }
  },
  {
    name: "Himalayan Region",
    states: ["Himachal", "Uttarakhand", "J&K"],
    riskLevel: "High",
    primaryThreats: ["Earthquake", "Landslide", "Flash Floods"],
    color: "bg-danger",
    stats: { institutions: 67, drills: "890" }
  },
  {
    name: "Northeast States",
    states: ["Assam", "Manipur", "Meghalaya", "Others"],
    riskLevel: "High", 
    primaryThreats: ["Earthquake", "Floods", "Landslide"],
    color: "bg-danger",
    stats: { institutions: 89, drills: "1.2K" }
  }
];

const getRiskColor = (level: string) => {
  switch (level) {
    case "Very High": return "border-red-500 text-red-500";
    case "High": return "border-orange-500 text-orange-500";
    case "Medium": return "border-yellow-500 text-yellow-500";
    default: return "border-green-500 text-green-500";
  }
};

export const RegionSelector = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Region-Specific Disaster Preparedness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select your region to access localized disaster information, emergency protocols, 
            and preparedness strategies tailored to your area's specific risks and vulnerabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <Card key={index} className="hover:shadow-emergency transition-all duration-300 group cursor-pointer">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-hero p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {region.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {region.states.join(", ")}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getRiskColor(region.riskLevel)}>
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    {region.riskLevel}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-1" />
                    Primary Threats
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {region.primaryThreats.map((threat, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {threat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-primary mr-1" />
                      <span className="font-bold text-foreground">{region.stats.institutions}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Institutions</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-secondary mr-1" />
                      <span className="font-bold text-foreground">{region.stats.drills}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Drills Completed</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-hero hover:opacity-90 group-hover:scale-105 transition-all">
                  Select Region & Start
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find Your Region?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're continuously expanding our coverage across India. Contact us to add your region 
              or access general disaster preparedness modules that work nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero">
                Request New Region
              </Button>
              <Button size="lg" variant="outline">
                Access General Modules
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};