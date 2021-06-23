import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "./test/testUtils";

/**
 * Create a wrapper function with specified initial conditions.
 * @function setup
 * @param {Object} state
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to the input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  // Simulate is an option available in shallow & mount in enzyme
  // here we are using change to simulate the on change event
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate a click on the submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  // we are passing in preventDefault inside an object as secong argument to cover for the actual e.preventDefault call
  submitButton.simulate("click", { prevenetDefault: () => {} });

  return wrapper;
};

describe.skip("no words have been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("create guessedWords table with one row", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow.length).toBe(1);
  });
});

describe.skip("some words have been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: "1" }],
    });
  });
  test("add row to guessed words table", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow.length).toBe(2);
  });
});

describe("invalid words should not get added to the table", () => {
  test.todo(
    "placeholder for test to be added for testing the invalid word scenario"
  );
});

describe.skip("all the words have been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: "1" }],
    });

    // Add the correct value to the input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // Clicking the submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { prevenetDefault: () => {} });
  });
  test("input box component is not visible", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);
  });

  test("submit button component is not visible", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });

  test("Congrats message is visible", () => {
    const congratsMessage = findByTestAttr(wrapper, "congrats-message");
    expect(congratsMessage.text().length).toBeGreaterThan(0);
  });
  test("The guessed words table is displayed with the correct word", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow).toHaveLength(3);
  });
});
