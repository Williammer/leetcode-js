import { arrayToLinkedlist } from "../_.general/linkedList";
import * as linkedListRandNode from "./382.linkedListRandNode";

describe("# Problem 382 - Get linkedList's Random Node.", () => {
  const randValCollector = (func, times, args) => {
    const result = {};
    while (times > 0) {
      const val = func(args);
      result[val] ? result[val]++ : (result[val] = 1);
      times--;
    }

    return result;
  };

  describe("Solution 1: Touch head's end to get its length, then generate a rand num for the node.", () => {
    it("should return 1st node value if only has one : [1] -> 1", () => {
      const list = arrayToLinkedlist([1]);
      const result = linkedListRandNode.touchEnd(list);

      expect(result).toEqual(1);
    });

    it("should return value of certain node: [1,2,3,4,5,6,7] -> isInArray", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const list = arrayToLinkedlist(array);
      const result = linkedListRandNode.touchEnd(list);

      expect(array).toContain(result);
    });

    it("shouldn't have same values of 10 calls : [1,2,3,4,5,6,7]", () => {
      const list = arrayToLinkedlist([1, 2, 3, 4, 5, 6, 7]);
      const arrayResult = [];

      const num_1 = linkedListRandNode.touchEnd(list);
      const num_2 = linkedListRandNode.touchEnd(list);
      const num_3 = linkedListRandNode.touchEnd(list);
      const num_4 = linkedListRandNode.touchEnd(list);
      const num_5 = linkedListRandNode.touchEnd(list);
      const num_6 = linkedListRandNode.touchEnd(list);
      const num_7 = linkedListRandNode.touchEnd(list);
      const num_8 = linkedListRandNode.touchEnd(list);
      const num_9 = linkedListRandNode.touchEnd(list);
      const num_10 = linkedListRandNode.touchEnd(list);

      const result =
        num_1 === num_10 &&
        num_1 === num_2 &&
        num_1 === num_3 &&
        num_1 === num_4 &&
        num_1 === num_5 &&
        num_1 === num_6 &&
        num_1 === num_7 &&
        num_1 === num_8 &&
        num_1 === num_9;

      expect(result).toEqual(false);
    });

    it("should have acceptable deviations for each node value: run [1,1,2,3] 40000 times -> {1: ~20000, 2: ~10000, 3: ~10000}, deviation < 5% ", () => {
      const array = [1, 1, 2, 3];
      const list = arrayToLinkedlist(array);

      const result = randValCollector(linkedListRandNode.touchEnd, 40000, list);

      const prob1 = result[1] / 20000;
      const prob2 = result[2] / 10000;
      const prob3 = result[3] / 10000;
      const baseDeviation = 1;

      // console.log(`result[1]: ${result[1]} | prob1: ${prob1}`);
      // console.log(`result[2]: ${result[2]} | prob2: ${prob2}`);
      // console.log(`result[3]: ${result[3]} | prob3: ${prob3}`);

      expect(prob1).toBeCloseTo(baseDeviation, 1);
      expect(prob2).toBeCloseTo(baseDeviation, 1);
      expect(prob3).toBeCloseTo(baseDeviation, 1);
    });
  });

  describe("Solution 2: Reservoir sampling that progessively rand the node.", () => {
    it("should return 1st node value if only has one : [1] -> 1", () => {
      const list = arrayToLinkedlist([1]);
      const result = linkedListRandNode.reservoirSample(list);

      expect(result).toEqual(1);
    });

    it("should return value of certain node: [1,2,3,4,5,6,7] -> isInArray", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const list = arrayToLinkedlist(array);
      const result = linkedListRandNode.reservoirSample(list);

      expect(array).toContain(result);
    });

    it("shouldn't have same values of 10 calls : [1,2,3,4,5,6,7]", () => {
      const list = arrayToLinkedlist([1, 2, 3, 4, 5, 6, 7]);
      const arrayResult = [];

      const num_1 = linkedListRandNode.reservoirSample(list);
      const num_2 = linkedListRandNode.reservoirSample(list);
      const num_3 = linkedListRandNode.reservoirSample(list);
      const num_4 = linkedListRandNode.reservoirSample(list);
      const num_5 = linkedListRandNode.reservoirSample(list);
      const num_6 = linkedListRandNode.reservoirSample(list);
      const num_7 = linkedListRandNode.reservoirSample(list);
      const num_8 = linkedListRandNode.reservoirSample(list);
      const num_9 = linkedListRandNode.reservoirSample(list);
      const num_10 = linkedListRandNode.reservoirSample(list);

      const result =
        num_1 === num_10 &&
        num_1 === num_2 &&
        num_1 === num_3 &&
        num_1 === num_4 &&
        num_1 === num_5 &&
        num_1 === num_6 &&
        num_1 === num_7 &&
        num_1 === num_8 &&
        num_1 === num_9;

      expect(result).toEqual(false);
    });

    it("should have acceptable deviations for each node value: run [1,1,2,3] 40000 times -> {1: ~20000, 2: ~10000, 3: ~10000}, deviation < 5% ", () => {
      const array = [1, 1, 2, 3];
      const list = arrayToLinkedlist(array);

      const result = randValCollector(linkedListRandNode.reservoirSample, 40000, list);

      const prob1 = result[1] / 20000;
      const prob2 = result[2] / 10000;
      const prob3 = result[3] / 10000;
      const baseDeviation = 1;

      // console.log(`result[1]: ${result[1]} | prob1: ${prob1}`);
      // console.log(`result[2]: ${result[2]} | prob2: ${prob2}`);
      // console.log(`result[3]: ${result[3]} | prob3: ${prob3}`);

      expect(prob1).toBeCloseTo(baseDeviation, 1);
      expect(prob2).toBeCloseTo(baseDeviation, 1);
      expect(prob3).toBeCloseTo(baseDeviation, 1);
    });
  });
});
