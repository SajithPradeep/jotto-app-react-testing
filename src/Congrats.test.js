import { shallow } from "enzyme";

import Congrats from "./Congrats";

import { CheckProps, findByTestAttr } from "./test/testUtils";

const defaultProps = { success: false };

//Setting up the setup method for shallow rendering
/**
 * Factory function to create a shallow wrapper for the congrats component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when the `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when the `success` prop is true.", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  CheckProps(Congrats, expectedProps);
});
