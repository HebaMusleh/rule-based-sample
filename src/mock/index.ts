import { Question } from "../types";

export const quizQuestions: Question[] = [
  {
    question: "What do you enjoy most about building applications?",
    options: [
      {
        text: "Creating intuitive and visually appealing interfaces",
        scores: { Frontend: 3 },
      },
      {
        text: "Designing robust APIs and server logic",
        scores: { Backend: 3 },
      },
      {
        text: "Automating deployments and managing infrastructure",
        scores: { DevOps: 3 },
      },
    ],
  },
  {
    question: "Which tool or technology excites you the most?",
    options: [
      { text: "React, Vue, or Angular", scores: { Frontend: 3 } },
      { text: "Node.js, Django, or Ruby on Rails", scores: { Backend: 3 } },
      { text: "Docker, Kubernetes, or Jenkins", scores: { DevOps: 3 } },
    ],
  },
  {
    question: "What aspect of problem-solving motivates you?",
    options: [
      {
        text: "Optimizing user experience and design",
        scores: { Frontend: 2 },
      },
      {
        text: "Solving complex business logic and data handling",
        scores: { Backend: 2 },
      },
      {
        text: "Ensuring systems run smoothly in production",
        scores: { DevOps: 2 },
      },
    ],
  },
];