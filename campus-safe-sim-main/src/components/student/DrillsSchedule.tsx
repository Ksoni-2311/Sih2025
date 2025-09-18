import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Bell } from "lucide-react";

export const DrillsSchedule = () => {
  const upcomingDrills = [
    {
      type: "Fire Drill",
      date: "January 20, 2024",
      time: "10:00 AM",
      location: "Hostel Block A",
      mandatory: true,
      participants: "All residents",
      status: "upcoming"
    },
    {
      type: "Earthquake Drill",
      date: "January 25, 2024",
      time: "2:00 PM",
      location: "Main Campus",
      mandatory: true,
      participants: "All students & staff",
      status: "upcoming"
    },
    {
      type: "Medical Emergency",
      date: "January 30, 2024",
      time: "11:30 AM",
      location: "Library Building",
      mandatory: false,
      participants: "Library users",
      status: "optional"
    }
  ];

  const pastDrills = [
    {
      type: "Fire Drill",
      date: "January 15, 2024",
      time: "10:00 AM",
      location: "Main Block",
      participation: "Present",
      score: 95,
      status: "completed"
    },
    {
      type: "Lockdown Drill",
      date: "January 10, 2024",
      time: "3:00 PM",
      location: "Science Block",
      participation: "Present",
      score: 88,
      status: "completed"
    }
  ];

  const getStatusColor = (status: string, mandatory?: boolean) => {
    if (status === "upcoming") {
      return mandatory ? "bg-warning text-warning-foreground" : "bg-secondary text-secondary-foreground";
    }
    return "bg-muted text-muted-foreground";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-secondary";
    if (score >= 75) return "text-warning";
    return "text-danger";
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Drill Schedule</h2>
      </div>

      {/* Upcoming Drills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Drills</h3>
        <div className="space-y-3">
          {upcomingDrills.map((drill, index) => (
            <div key={index} className="p-4 border border-border rounded-lg bg-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{drill.type}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{drill.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{drill.time}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(drill.status, drill.mandatory)}>
                  {drill.mandatory ? "Mandatory" : "Optional"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{drill.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{drill.participants}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
                <span className="text-sm text-muted-foreground">
                  {drill.mandatory ? "Attendance Required" : "Voluntary Participation"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Drills */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Performance</h3>
        <div className="space-y-3">
          {pastDrills.map((drill, index) => (
            <div key={index} className="p-3 border border-border rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-medium text-foreground">{drill.type}</span>
                  <div className="text-sm text-muted-foreground">{drill.date} • {drill.location}</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs mb-1">
                    {drill.participation}
                  </Badge>
                  <div className={`text-sm font-bold ${getScoreColor(drill.score)}`}>
                    Score: {drill.score}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">Attendance Rate</div>
          </div>
          <div>
            <div className="text-xl font-bold text-secondary">91.5%</div>
            <div className="text-xs text-muted-foreground">Avg Performance</div>
          </div>
          <div>
            <div className="text-xl font-bold text-foreground">8</div>
            <div className="text-xs text-muted-foreground">Drills Completed</div>
          </div>
        </div>
      </div>
    </Card>
  );
};