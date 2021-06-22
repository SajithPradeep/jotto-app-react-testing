import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, CheckProps } from "./test/testUtils";
import Input from "./Input";

const setup = (props) => shallow(<Input {...props} />);

// Setting up mocks for react apis
// const mockSetCurrentGuess = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

describe("render", () => {
  const secretWord = "party";
  let wrapper;
  describe("Success is true", () => {
    beforeEach(() => {
      wrapper = setup({ secretWord, success: true });
    });
    test("renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const inputBox = findByTestAttr(wrapper, "submit-button");
      expect(inputBox.exists()).toBe(false);
    });
  });
  describe("Success is false", () => {
    beforeEach(() => {
      wrapper = setup({ secretWord, success: false });
    });
    test("renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box shows", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button shows", () => {
      const inputBox = findByTestAttr(wrapper, "submit-button");
      expect(inputBox.exists()).toBe(true);
    });
  });
});

describe("Testing the input component", () => {
  const secretWord = "party";
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord });
  });
  test("renders without error", () => {
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
  });
  test("Do not throw warning with expected props", () => {
    CheckProps(Input, { secretWord });
  });

  describe("state controlled input field", () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(() => {
      // We are clearing the mock function before each test so that it does not retain any previous values
      mockSetCurrentGuess.mockClear();
      // Using the originalState property to temporarily store the actual useState value
      originalUseState = React.useState;
      // Mocking the useState method in react with jest
      React.useState = () => ["", mockSetCurrentGuess];

      wrapper = setup({ secretWord: "party" });
    });
    afterEach(() => {
      // After the test implementation we are setting the value of useState back
      React.useState = originalUseState;
    });
    test("state update with value of input field on change", () => {
      const inputComponent = findByTestAttr(wrapper, "input-box");

      const mockEvent = { target: { value: "train" } };
      inputComponent.simulate("change", mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });

    test("setCurrentGuess function gets called with an empty string when button is clicked initially", () => {
      const buttonComponent = findByTestAttr(wrapper, "submit-button");

      // Passing the {preventDefault: () => {}} event along with the click simulation to handle the e.preventDefault in the actual function
      buttonComponent.simulate("click", { preventDefault: () => {} });
      expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
  });
});
