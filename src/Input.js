// import React, { useState } from "react";
import React from "react";
import propTypes from "prop-types";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentGuess(currentGuess);
    // todo - update guessed words global state
    // todo - check against secret word and optionally update the success state
  };
  if (success) {
    return <div data-test="component-input"></div>;
  }
  return (
    <div data-test="component-input">
      <form action="" className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="Enter Guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          className="btn btn-primary"
          data-test="submit-button"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};

export default Input;
