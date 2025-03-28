import React, { useState } from "react";
import styles from "./Questionnaire.module.css";

import { TechCategory } from "../types";
import { quizQuestions } from "../mock";

function evaluateQuiz(scores: Record<TechCategory, number>): TechCategory {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] as TechCategory;
}

const Questionnaire: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Partial<Record<TechCategory, number>>>(
    {
      Frontend: 0,
      Backend: 0,
      DevOps: 0,
    }
  );
  const [result, setResult] = useState<TechCategory | null>(null);

  const handleAnswer = (scores: Partial<Record<TechCategory, number>>) => {
    const updatedScores = { ...answers };
    for (const category in scores) {
      updatedScores[category as TechCategory] +=
        scores[category as TechCategory] || 0;
    }
    setAnswers(updatedScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalResult = evaluateQuiz(
        updatedScores as Record<TechCategory, number>
      );
      setResult(finalResult);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Technology Major Quiz</h1>
      {result === null ? (
        <div className={styles.quizSection}>
          <h2 className={styles.questionHeader}>
            Question {currentQuestion + 1}
          </h2>
          <p className={styles.questionText}>
            {quizQuestions[currentQuestion].question}
          </p>
          <div className={styles.options}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.scores)}
                className={styles.optionButton}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.results}>
          <h2 className={styles.resultHeader}>
            Your Suggested Technology Major
          </h2>
          <p className={styles.resultText}>
            Based on your answers, you might enjoy a career in{" "}
            <strong>{result}</strong>.
          </p>
          <p className={styles.resultText}>
            {result === "Frontend"
              ? "You have an eye for design and user experience."
              : result === "Backend"
              ? "You excel in solving complex problems and managing data."
              : "You have a knack for building and maintaining reliable systems."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
