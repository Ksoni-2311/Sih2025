import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, AlertTriangle, Phone, Cloud, Thermometer } from "lucide-react";

export const RegionSpecificInfo = () => {
  const regionData = {
    region: "Delhi NCR",
    riskLevel: "Medium",
    primaryThreats: ["Air Pollution", "Extreme Heat", "Seasonal Flooding"],
    weatherAlert: {
      type: "Heat Wave Warning",
      severity: "High",
      validUntil: "January 25, 2024"
    },
    emergencyContacts: [
      { service: "Delhi Fire Service", number: "101" },
      { service: "Delhi Police", number: "100" },
      { service: "Medical Emergency", number: "108" },
      { service: "Disaster Management", number: "1077" }
    ]
  };

  const regionalGuidelines = [
    {
      threat: "Air Pollution",
      guidelines: [
        "Wear N95 masks during high AQI days",
        "Limit outdoor activities when AQI > 300",
        "Keep windows closed during peak pollution hours"
      ]
    },
    {
      threat: "Extreme Heat",
      guidelines: [
        "Stay hydrated - drink water regularly",
        "Avoid outdoor activities during 11 AM - 4 PM",
        "Wear light-colored, loose-fitting clothes"
      ]
    },
    {
      threat: "Seasonal Flooding",
      guidelines: [
        "Avoid waterlogged areas during monsoon",
        "Keep emergency supplies ready",
        "Stay updated with weather forecasts"
      ]
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "bg-danger text-danger-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Regional Safety Information</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Region Overview */}
        <div className="lg:col-span-1">
          <div className="p-4 bg-muted rounded-lg mb-4">
            <h3 className="font-semibold text-foreground mb-3">Your Region</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-foreground">{regionData.region}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Risk Level</span>
                <Badge className={getRiskColor(regionData.riskLevel)}>
                  {regionData.riskLevel}
                </Badge>
              </div>
            </div>
          </div>

          {/* Current Weather Alert */}
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-warning" />
              <span className="font-semibold text-foreground">Weather Alert</span>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-warning">{regionData.weatherAlert.type}</div>
              <div className="text-sm text-muted-foreground">
                Valid until: {regionData.weatherAlert.validUntil}
              </div>
              <Badge className="bg-warning text-warning-foreground text-xs">
                {regionData.weatherAlert.severity} Priority
              </Badge>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" />
              Regional Emergency Contacts
            </h3>
            <div className="space-y-2">
              {regionData.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-card rounded border border-border">
                  <span className="text-sm text-foreground">{contact.service}</span>
                  <span className="font-bold text-primary">{contact.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Guidelines */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Regional Safety Guidelines
          </h3>
          
          <div className="space-y-4">
            {regionalGuidelines.map((item, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-card">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-primary" />
                  {item.threat}
                </h4>
                <ul className="space-y-2">
                  {item.guidelines.map((guideline, gIndex) => (
                    <li key={gIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Primary Threats */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">Primary Regional Threats</h4>
            <div className="flex flex-wrap gap-2">
              {regionData.primaryThreats.map((threat, index) => (
                <Badge key={index} variant="outline" className="bg-background">
                  {threat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <Button className="w-full bg-primary hover:bg-primary/90">
              View Detailed Regional Safety Plan
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};