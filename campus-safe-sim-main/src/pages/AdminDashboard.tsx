import { Header } from "@/components/Header";
import { ComplianceAndRiskAssessmentCenter } from "@/components/admin/ComplianceAndRiskAssessmentCenter";
import { EmergencyPreparednessCommandCenter } from "@/components/admin/EmergencyPreparednessCommandCenter";
import { StudentSafetyTrainingInsights } from "@/components/admin/StudentSafetyTrainingInsights";
import { DrillPerformanceAnalyticsDashboard } from "@/components/admin/DrillPerformanceAnalyticsDashboard";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const AdminDashboard = () => {
  return (
    <ProtectedRoute authKey="adminAuth" redirectTo="/admin-login">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive safety management and analytics</p>
          </div>
          
          <div className="grid gap-8">
            <EmergencyPreparednessCommandCenter />
            <div className="grid lg:grid-cols-2 gap-8">
              <ComplianceAndRiskAssessmentCenter />
              <StudentSafetyTrainingInsights />
            </div>
            <DrillPerformanceAnalyticsDashboard />
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;