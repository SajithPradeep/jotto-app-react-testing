import { shallow } from "enzyme";
import { findByTestAttr, CheckProps } from "./test/testUtils";
import Input from "./Input";

const setup = (props) => shallow(<Input {...props} />);

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
});
