
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

/**
 * Returns a random subset of questions.
 * The function first shuffles the questions array and then
 * returns the first `count` elements.
 *
 * @param {Array} questions - Array of question objects
 * @param {number} count - Number of questions to return
 * @returns {Array} Randomized subset of questions
 */
export function getRandomQuestions(questions, count) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
