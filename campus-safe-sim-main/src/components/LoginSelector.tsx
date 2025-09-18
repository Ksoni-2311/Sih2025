import { Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-disaster-prep.jpg";

export const LoginSelector = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 inline-block mb-8">
            <span className="text-white font-bold text-lg">CAMPUS SAFETY PLATFORM</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            SAFETY DASHBOARD
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Choose your role to access your personalized safety dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Admin Path */}
          <Card className="p-10 bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-300 group cursor-pointer shadow-2xl">
            <div className="text-center">
              <div className="bg-gradient-warning p-6 rounded-full w-24 h-24 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-12 h-12 text-white mx-auto mt-1" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Admin</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Administrative dashboard for safety management.
              </p>
              <Button 
                onClick={() => navigate('/admin-login')}
                className="w-full bg-white text-primary hover:bg-white/95 transition-all duration-300 text-lg py-4 font-semibold shadow-lg"
              >
                Admin Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Student Path */}
          <Card className="p-10 bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-300 group cursor-pointer shadow-2xl">
            <div className="text-center">
              <div className="bg-gradient-safety p-6 rounded-full w-24 h-24 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-12 h-12 text-white mx-auto mt-1" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Student</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Your personal safety training dashboard.
              </p>
              <Button 
                onClick={() => navigate('/student-login')}
                className="w-full bg-white text-primary hover:bg-white/95 transition-all duration-300 text-lg py-4 font-semibold shadow-lg"
              >
                Student Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};