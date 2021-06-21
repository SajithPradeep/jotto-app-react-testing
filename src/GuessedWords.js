import React from "react";
import propTypes from "prop-types";

const GuessedWords = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the word!</span>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWords: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
