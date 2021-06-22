import { getLetterMatchCount } from "./index";

describe("testing getLetterMatchCount", () => {
  const secretWord = "party";
  test("test the function output when there are no matching words", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("test the function output when there are 3 matching words", () => {
    const letterMatchCount = getLetterMatchCount("paetq", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("test the function output when there are duplicate letters in the guessed word", () => {
    const letterMatchCount = getLetterMatchCount("pprry", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
