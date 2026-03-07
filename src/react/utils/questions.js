
/**
 * Filters questions by category and difficulty.
 * @param {Array} questions - Array of question objects.
 * @param {Object} filters - Filtering options.
 * @param {string} filters.category - Selected category.
 * @param {string} filters.difficulty - Selected difficulty.
 * @returns {Array} Filtered array of questions.
 */
export function getFilteredQuestions(questions, filters) {
  const { difficulty, category } = filters;

  return questions.filter((question) =>
    question.category === category &&
    question.difficulty === difficulty
  );
};
