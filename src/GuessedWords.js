import React from "react";
import propTypes from "prop-types";

const GuessedWords = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the word!</span>
    );
  } else {
    const generateTableRow = props.guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    content = (
      <div data-test="guessed-words">
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guessed Words</th>
              <th>Matching Count</th>
            </tr>
          </thead>
          <tbody>{generateTableRow}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
