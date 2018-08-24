import * as $$_title from "./$$_num.$$_title";

describe("# Problem $$_num - ", () => {
  const testCases = [
    {},
  ];

  Object.values($$_title).forEach((algorithm) => {
    describe(`Solution: using ${algorithm.name}`, () => {
      testCases.forEach(({ input, output }) => {
        it(`${input} -> ${output}`, () => {
          expect(algorithm(input)).toEqual(output);
        });
      });
    });
  });
});
