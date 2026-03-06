
// Enums
export const DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
};

export const CATEGORY = {
  TECHNOLOGY: "technology",
  GEOGRAPHY: "geography",
  SPORT: "sport"
};

// Options for UI
export const QUESTION_OPTIONS = [1, 3, 5];

export const DIFFICULTY_OPTIONS = [
  { value: DIFFICULTY.EASY, label: 'Easy' },
  { value: DIFFICULTY.MEDIUM, label: 'Medium' },
  { value: DIFFICULTY.HARD, label: 'Hard' }
];

export const CATEGORY_OPTIONS = [
  { value: CATEGORY.TECHNOLOGY, label: 'Technology' },
  { value: CATEGORY.GEOGRAPHY, label: 'Geography' },
  { value: CATEGORY.SPORT, label: 'Sport' }
];

// Default State
export const DEFAULT_SETTINGS = {
  numQuestions: 1,
  difficulty: DIFFICULTY.EASY,
  category: CATEGORY.TECHNOLOGY
};
