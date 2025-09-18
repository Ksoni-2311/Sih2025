import { AlertTriangle, Phone, Users, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const EmergencyDecisionFlow = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [currentStep, setCurrentStep] = useState('help');

  const handleEmergency = () => {
    setEmergencyActive(true);
    setCurrentStep('help');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Emergency Response System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick access to emergency protocols and decision support system
          </p>
        </div>

        {/* Emergency Button - Always at top */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 border-4 border-danger bg-danger/5">
            <div className="text-center">
              <AlertCircle className="w-20 h-20 text-danger mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold text-danger mb-4">EMERGENCY ALERT</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Click this button if you are currently experiencing an emergency situation
              </p>
              <Button 
                onClick={handleEmergency}
                className="bg-danger hover:bg-danger/90 text-white text-xl px-12 py-6 h-auto animate-pulse"
                size="lg"
              >
                <AlertTriangle className="w-6 h-6 mr-3" />
                EMERGENCY - ACTIVATE NOW
              </Button>
            </div>
          </Card>
        </div>

        {emergencyActive && (
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Emergency Response Actions */}
              <div className="space-y-6">
                <Card className="p-8 border-2 border-danger bg-danger/5">
                  <div className="text-center">
                    <Phone className="w-16 h-16 text-danger mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Scope of External Help</h3>
                    <p className="text-muted-foreground mb-6">Choose the appropriate response for your emergency</p>
                    <div className="space-y-4">
                      <Button variant="destructive" size="lg" className="w-full text-lg py-4">
                        <Phone className="w-5 h-5 mr-3" />
                        YES - Call Emergency Services (112)
                      </Button>
                      <Button variant="secondary" size="lg" className="w-full text-lg py-4">
                        <Users className="w-5 h-5 mr-3" />
                        NO - Next Best Action (NBA)
                      </Button>
                    </div>
                  </div>
                </Card>

                <Button 
                  variant="outline" 
                  onClick={() => setEmergencyActive(false)}
                  className="w-full"
                >
                  Reset Emergency Status
                </Button>
              </div>

              {/* Information Panel */}
              <div className="space-y-6">
                <Card className="p-6 bg-secondary/10 border-secondary/20">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Past Drill Details</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Last drill: Fire evacuation (March 15, 2024)</p>
                        <p>• Participation: 87% (435/500 students)</p>
                        <p>• Average response time: 3.2 minutes</p>
                        <p>• Success rate: 94%</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Upcoming Drills</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Earthquake drill - April 5, 2024 at 10:30 AM</p>
                        <p>• Flood evacuation - April 20, 2024 at 2:00 PM</p>
                        <p>• Fire safety - May 10, 2024 at 11:00 AM</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-warning/10 border-warning/20">
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-warning mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Important Information</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Emergency assembly point: Main playground</p>
                        <p>• Emergency contact: +91-9876543210</p>
                        <p>• Medical team: Available 24/7 in medical room</p>
                        <p>• Fire extinguishers: Located on every floor</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Practice Mode for Non-Emergency */}
        {!emergencyActive && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-secondary/5 border-secondary/20">
              <div className="text-center">
                <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-4">Practice Mode</h3>
                <p className="text-muted-foreground mb-6">
                  No emergency? Perfect time to practice your disaster preparedness skills and knowledge.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  <Users className="w-5 h-5 mr-2" />
                  Continue to Training Modules
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};