import questions from "../data/questions";

const availableCategories = [...new Set(questions.map(q => q.category))];

const availableDifficulties = [...new Set(questions.map(q => q.difficulty))];

export const DEFAULT_SETTINGS = {
  category: availableCategories[0],
  difficulty: availableDifficulties[0],
  numQuestions: 1
};

export const AVAILABLE_CATEGORIES = availableCategories;
export const AVAILABLE_DIFFICULTIES = availableDifficulties;
