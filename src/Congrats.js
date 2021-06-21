import React from "react";
import propTypes from "prop-types";

/**
 * Functional recat component for congratulatory message
 * @function Congrats
 * @param {object} props - React props
 * @returns
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          <h3 className="alert-success">
            Congratulations! You guessed the word.
          </h3>
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: propTypes.bool.isRequired,
};

export default Congrats;
