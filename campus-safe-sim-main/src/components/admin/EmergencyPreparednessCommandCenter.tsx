import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, MapPin, Phone, Activity } from "lucide-react";

export const EmergencyPreparednessCommandCenter = () => {
  const activeAlerts = [
    { id: 1, type: "Fire Drill", location: "Building A - Floor 3", time: "2 minutes ago", priority: "High" },
    { id: 2, type: "Weather Alert", location: "Campus Wide", time: "15 minutes ago", priority: "Medium" },
  ];

  const emergencyContacts = [
    { name: "Fire Department", number: "101", status: "Active" },
    { name: "Police", number: "100", status: "Active" },
    { name: "Medical Emergency", number: "108", status: "Active" },
    { name: "Campus Security", number: "+91-9876543210", status: "Active" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-danger text-danger-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-primary/5 to-danger/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Emergency Command Center</h2>
        </div>
        <Button className="bg-danger hover:bg-danger/90 text-danger-foreground">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Emergency Alert
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Alerts */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Active Alerts
          </h3>
          <div className="space-y-3">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="p-3 border border-border rounded-lg bg-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{alert.type}</span>
                  <Badge className={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{alert.location}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{alert.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-secondary" />
            Emergency Contacts
          </h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-3 border border-border rounded-lg bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">{contact.name}</div>
                    <div className="text-lg font-bold text-primary">{contact.number}</div>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">{contact.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <Users className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">2,847</div>
          <div className="text-sm text-muted-foreground">Students On Campus</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <Activity className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">98.5%</div>
          <div className="text-sm text-muted-foreground">System Uptime</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <AlertTriangle className="w-6 h-6 text-warning mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">2</div>
          <div className="text-sm text-muted-foreground">Active Alerts</div>
        </div>
      </div>
    </Card>
  );
};