import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Shield, CheckCircle, XCircle } from "lucide-react";

export const ComplianceAndRiskAssessmentCenter = () => {
  const riskAreas = [
    { area: "Fire Safety", level: "High", compliance: 85, status: "Needs Attention" },
    { area: "Earthquake Preparedness", level: "Medium", compliance: 92, status: "Compliant" },
    { area: "Flood Management", level: "Low", compliance: 78, status: "Needs Improvement" },
    { area: "Chemical Safety", level: "High", compliance: 95, status: "Compliant" },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "bg-danger text-danger-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "Compliant" ? 
      <CheckCircle className="w-4 h-4 text-secondary" /> : 
      <XCircle className="w-4 h-4 text-danger" />;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Compliance & Risk Assessment</h2>
      </div>
      
      <div className="space-y-4">
        {riskAreas.map((risk, index) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span className="font-semibold text-foreground">{risk.area}</span>
                <Badge className={getRiskColor(risk.level)}>{risk.level} Risk</Badge>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(risk.status)}
                <span className="text-sm text-muted-foreground">{risk.status}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Compliance Score</span>
                <span className="font-medium text-foreground">{risk.compliance}%</span>
              </div>
              <Progress value={risk.compliance} className="h-2" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Overall Risk Score</span>
        </div>
        <div className="text-2xl font-bold text-primary">87.5%</div>
        <p className="text-sm text-muted-foreground mt-1">Above average safety compliance</p>
      </div>
    </Card>
  );
};