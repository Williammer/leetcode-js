import * as strPalindrome from "./125.strPalindrome";

describe("# Problem 125 - whether the given string is palindrome. Only consider case-insensitive alphanumeric.", () => {
  const testSets = [{
    input: "",
    output: true
  }, {
    input: ";:|{><?",
    output: true
  }, {
    input: "a",
    output: true
  }, {
    input: "aA",
    output: true
  }, {
    input: ".;:|a.;:|{><?a><?",
    output: true
  }, {
    input: "ab",
    output: false
  }, {
    input: "race a car",
    output: false
  }, {
    input: "raceacar",
    output: false
  }, {
    input: "abcdcba",
    output: true
  }, {
    input: "abccdcba",
    output: false
  }, {
    input: "A man, a plan, a canal: Panama",
    output: true
  }, {
    input: ",; W;:GlG:;l ;,",
    output: false
  }];

  Object.entries(strPalindrome).forEach(([name, solution]) => {
    describe(`Solution: ${name}`, () => {
      testSets.forEach(({
        input,
        output
      }) => {
        it(`${input} -> ${output}`, () => {
          expect(solution(input)).toEqual(output);
        });
      });
    });
  });
});