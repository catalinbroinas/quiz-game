import {
  CATEGORY,
  DIFFICULTY
} from "../constants/quizOptions";

const questions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.EASY,
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: 0
  }
];

export default questions;
