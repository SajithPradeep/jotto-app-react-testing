import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import App from "./App";

//activate global mock to make sure getSecretWord doesn't make a network call
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

/**
 * Function to create a shallow rendering
 * @returns {ShallowWrapper}
 */
const setup = () => mount(<App />); // We need to use mount because useEffect does not run with shallow

test("rendered without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    //clear the mocks called from previous tests
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord is received on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    const wrapper = setup(); // This is to mount the component
    mockGetSecretWord.mockClear(); // This is to clear the mocks created while mounting the component

    wrapper.setProps(); // This is done to update the component. wrapper.update() is not triggering the update
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
