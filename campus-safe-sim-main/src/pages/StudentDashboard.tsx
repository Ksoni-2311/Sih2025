import { Header } from "@/components/Header";
import { StudentQuizzes } from "@/components/student/StudentQuizzes";
import { DrillsSchedule } from "@/components/student/DrillsSchedule";
import { RegionSpecificInfo } from "@/components/student/RegionSpecificInfo";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const StudentDashboard = () => {
  return (
    <ProtectedRoute authKey="studentAuth" redirectTo="/student-login">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground">Your safety training and assessment center</p>
          </div>
          
          <div className="grid gap-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <StudentQuizzes />
              <DrillsSchedule />
            </div>
            <RegionSpecificInfo />
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default StudentDashboard;