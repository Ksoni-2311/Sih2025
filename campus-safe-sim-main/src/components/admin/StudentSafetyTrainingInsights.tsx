import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Trophy, TrendingUp } from "lucide-react";

export const StudentSafetyTrainingInsights = () => {
  const trainingModules = [
    { module: "Fire Safety", completed: 85, total: 100, avgScore: 88 },
    { module: "Earthquake Response", completed: 92, total: 100, avgScore: 91 },
    { module: "First Aid", completed: 76, total: 100, avgScore: 84 },
    { module: "Chemical Safety", completed: 68, total: 100, avgScore: 79 },
  ];

  const topPerformers = [
    { name: "Raj Kumar", department: "Computer Science", score: 96 },
    { name: "Priya Singh", department: "Mechanical Eng.", score: 94 },
    { name: "Amit Sharma", department: "Civil Engineering", score: 92 },
  ];

  const getCompletionColor = (percentage: number) => {
    if (percentage >= 90) return "text-secondary";
    if (percentage >= 75) return "text-warning";
    return "text-danger";
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Student Training Insights</h2>
      </div>

      {/* Training Modules Progress */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Module Completion Rates</h3>
        <div className="space-y-4">
          {trainingModules.map((module, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{module.module}</span>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-semibold ${getCompletionColor(module.completed)}`}>
                    {module.completed}%
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Avg: {module.avgScore}%
                  </Badge>
                </div>
              </div>
              <Progress value={module.completed} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          Top Performers This Month
        </h3>
        <div className="space-y-3">
          {topPerformers.map((student, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <div className="font-medium text-foreground">{student.name}</div>
                <div className="text-sm text-muted-foreground">{student.department}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-secondary">{student.score}%</div>
                <div className="text-xs text-muted-foreground">Overall Score</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-primary/5 rounded-lg">
          <Users className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">1,247</div>
          <div className="text-sm text-muted-foreground">Active Students</div>
        </div>
        <div className="text-center p-4 bg-secondary/5 rounded-lg">
          <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">87.3%</div>
          <div className="text-sm text-muted-foreground">Avg Completion</div>
        </div>
      </div>
    </Card>
  );
};