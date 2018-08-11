export const runSuites = (testSuites, solutions) => {
  testSuites.forEach((t) => {
    solutions.forEach((solution) => {
      it(`${t.title} || solution: ${solution}`, t.suite(solution));
    });
  });
};
