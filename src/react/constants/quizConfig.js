import questions from "../data/questions";
import { DIFFICULTY, CATEGORY } from "./gameConstants";

const availableCategories = [...new Set(questions.map(q => q.category))];

const availableDifficulties = [...new Set(questions.map(q => q.difficulty))];

const defaultCategory =
  availableCategories.includes(CATEGORY.TECHNOLOGY)
    ? CATEGORY.TECHNOLOGY
    : availableCategories[0];

const difficultiesByCategory = [
  ...new Set(
    questions
      .filter(q => q.category === defaultCategory)
      .map(q => q.difficulty)
  )
];

const defaultDifficulty =
  difficultiesByCategory.includes(DIFFICULTY.EASY)
    ? DIFFICULTY.EASY
    : difficultiesByCategory[0];

export const DEFAULT_SETTINGS = {
  category: defaultCategory,
  difficulty: defaultDifficulty,
  numQuestions: 1
};

export const AVAILABLE_CATEGORIES = availableCategories;
export const AVAILABLE_DIFFICULTIES = availableDifficulties;
