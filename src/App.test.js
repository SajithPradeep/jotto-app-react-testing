import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import App from "./App";

/**
 * Function to create a shallow rendering
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("rendered without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});
