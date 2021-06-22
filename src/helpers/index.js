export const getLetterMatchCount = (guess, secretWord) => {
  const secretLetters = secretWord.split("");
  const guessedLetters = new Set(guess);
  return secretLetters.filter((letter) => guessedLetters.has(letter)).length;
};
