import { Header } from "@/components/Header";
import { LoginSelector } from "@/components/LoginSelector";
import { EmergencyDecisionFlow } from "@/components/EmergencyDecisionFlow";
import { SimulationModules } from "@/components/SimulationModules";
import { QuizAssessment } from "@/components/QuizAssessment";
import { RegionSelector } from "@/components/RegionSelector";
import { EmergencyResources } from "@/components/EmergencyResources";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LoginSelector />
        <EmergencyDecisionFlow />
        <SimulationModules />
        {/* <QuizAssessment /> */}
        <RegionSelector />
        <EmergencyResources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;