import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the first action during an earthquake while indoors?",
    options: [
      "Run outside immediately",
      "Drop, Cover, and Hold",
      "Stand in doorway",
      "Hide under stairs",
    ],
    correct: 1,
    explanation:
      "Drop to hands and knees, take cover under a sturdy desk, and hold on until shaking stops.",
  },
  {
    id: 2,
    question: "During a fire emergency, what should you do if smoke is present?",
    options: [
      "Stand upright and walk normally",
      "Crawl low under the smoke",
      "Hold breath and run",
      "Open all windows",
    ],
    correct: 1,
    explanation:
      "Stay low where the air is clearer and cooler, as smoke and heat rise.",
  },
  {
    id: 3,
    question: "What is the universal emergency number in India?",
    options: ["911", "100", "112", "108"],
    correct: 2,
    explanation:
      "112 is the national emergency number that connects to police, fire, and medical services.",
  },
  {
    id: 4,
    question: "During a flood warning, what should be your priority?",
    options: [
      "Save valuable items",
      "Move to higher ground",
      "Take photographs",
      "Wait for authorities",
    ],
    correct: 1,
    explanation:
      "Moving to higher ground immediately is the most important action to ensure safety.",
  },
];

interface QuizAssessmentProps {
  onBack: () => void;
}

export const QuizAssessment = ({ onBack }: QuizAssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
      setShowResult(false);
    }
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter(
      (answer, index) => answer === questions[index].correct
    ).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setQuizCompleted(false);
  };

  const score = calculateScore();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (quizCompleted) {
    return (
      <Card className="p-8 text-center max-w-2xl mx-auto my-20">
        <div
          className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
            score >= 75 ? "bg-secondary/20" : "bg-danger/20"
          }`}
        >
          <Trophy
            className={`w-12 h-12 ${
              score >= 75 ? "text-secondary" : "text-danger"
            }`}
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <div className="text-6xl font-bold mb-4">
          <span className={score >= 75 ? "text-secondary" : "text-danger"}>
            {score}%
          </span>
        </div>
        <Badge
          variant={score >= 75 ? "secondary" : "destructive"}
          className="mb-6 text-lg px-4 py-2"
        >
          {score >= 75 ? "PASSED ✓" : "NEEDS IMPROVEMENT"}
        </Badge>
        <p className="text-muted-foreground mb-8">
          {score >= 75
            ? "Excellent! You've demonstrated good understanding of emergency procedures."
            : "Keep practicing! Review the materials and try again to improve your score."}
        </p>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Correct Answers:{" "}
            {
              answers.filter(
                (answer, index) => answer === questions[index].correct
              ).length
            }{" "}
            / {questions.length}
          </div>
          <div className="flex gap-4">
            <Button onClick={resetQuiz} variant="outline" className="flex-1">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
            {score >= 75 && (
              <Button className="flex-1 bg-gradient-safety">
                Update Admin Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-4 flex items-center justify-center w-full"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Quiz Section
          </Button>
        </div>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Quiz and Virtual Drills</h2>
              <Badge variant="outline">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Score greater than 75% required to pass
            </p>
          </div>
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">{currentQ.question}</h3>
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQ.correct
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-danger bg-danger/10 text-danger"
                        : "border-primary bg-primary/10"
                      : showResult && index === currentQ.correct
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <>
                        {index === currentQ.correct && (
                          <CheckCircle className="w-5 h-5 text-secondary" />
                        )}
                        {selectedAnswer === index &&
                          index !== currentQ.correct && (
                            <XCircle className="w-5 h-5 text-danger" />
                          )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
            {showResult && (
              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p className="text-muted-foreground">{currentQ.explanation}</p>
              </div>
            )}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              {!showResult ? (
                <Button
                  onClick={() => setShowResult(true)}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
