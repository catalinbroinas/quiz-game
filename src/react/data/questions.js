import {
  CATEGORY,
  DIFFICULTY
} from "../constants/quizOptions";

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.EASY,
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which language is primarily used for styling web pages?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.EASY,
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which country has the largest population?",
    category: CATEGORY.GEOGRAPHY,
    difficulty: DIFFICULTY.EASY,
    answers: ["China", "India", "USA", "Brazil"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    category: CATEGORY.GEOGRAPHY,
    difficulty: DIFFICULTY.EASY,
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which sport uses the terms 'love' and 'deuce'?",
    category: CATEGORY.SPORT,
    difficulty: DIFFICULTY.EASY,
    answers: ["Tennis", "Football", "Basketball", "Golf"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which HTML tag is used to define an unordered list?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.MEDIUM,
    answers: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which country is home to the Great Barrier Reef?",
    category: CATEGORY.GEOGRAPHY,
    difficulty: DIFFICULTY.MEDIUM,
    answers: ["Australia", "New Zealand", "USA", "Brazil"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "In which sport would you perform a 'slam dunk'?",
    category: CATEGORY.SPORT,
    difficulty: DIFFICULTY.MEDIUM,
    answers: ["Basketball", "Volleyball", "Tennis", "Baseball"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Which JavaScript keyword declares a block-scoped variable?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.HARD,
    answers: ["var", "let", "const", "function"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the capital of Iceland?",
    category: CATEGORY.GEOGRAPHY,
    difficulty: DIFFICULTY.HARD,
    answers: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which country won the FIFA World Cup in 2018?",
    category: CATEGORY.SPORT,
    difficulty: DIFFICULTY.MEDIUM,
    answers: ["France", "Croatia", "Brazil", "Germany"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Which protocol is used to secure communication over the internet?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.HARD,
    answers: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which river flows through the city of Paris?",
    category: CATEGORY.GEOGRAPHY,
    difficulty: DIFFICULTY.EASY,
    answers: ["Thames", "Seine", "Danube", "Rhine"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "How many players are there on a soccer team on the field?",
    category: CATEGORY.SPORT,
    difficulty: DIFFICULTY.EASY,
    answers: ["9", "10", "11", "12"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Which CSS property is used to change the text color?",
    category: CATEGORY.TECHNOLOGY,
    difficulty: DIFFICULTY.EASY,
    answers: ["font-color", "color", "text-color", "background-color"],
    correctAnswer: 1
  }
];

export default questions;
