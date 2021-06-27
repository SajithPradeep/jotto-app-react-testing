import moxios from "moxios";
import { getSecretWord } from "./";

describe("getSecretWord", () => {
  // this will install moxios package to which we will be routing the axios calls while testing
  beforeEach(() => {
    moxios.install();
  });
  // this will uninstall moxios after each test so that axios can revert back to requesting to the server
  afterEach(() => {
    moxios.uninstall();
  });
  test("secret word is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    // TODO: update to test app in redux / react sections

    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
