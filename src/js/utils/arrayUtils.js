
// Returns a new array with elements shuffled randomly
export function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Returns a new array with elements shuffled randomly
export function takeFirst(arr, count) {
  return arr.slice(0, count);
}
