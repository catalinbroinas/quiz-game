import questions from "../data/questions";
import { DIFFICULTY, CATEGORY } from "../constants/gameConstants";
import { getDifficultiesByCategory, getFilteredQuestions } from "../utils/questions";

const validCategories = Object.values(CATEGORY);

const availableCategories = validCategories.filter(category =>
  questions.some(q => q.category === category)
);

const defaultCategory =
  availableCategories.includes(CATEGORY.TECHNOLOGY)
    ? CATEGORY.TECHNOLOGY
    : availableCategories[0];

const difficultiesByCategory = getDifficultiesByCategory(questions, defaultCategory);

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
export const INITIAL_DIFFICULTIES = difficultiesByCategory;

export const INITIAL_NUM_QUESTIONS = getFilteredQuestions(
  questions,
  DEFAULT_SETTINGS
).length;
