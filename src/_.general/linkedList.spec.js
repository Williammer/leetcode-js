import { ListNode, arrayToLinkedlist, linkedlistToArray, clone, prepend } from "./linkedList";

describe("[Util] linkedList - convert between array and linkedList.", () => {
  it("arrayToLinkedlist return (0 -> 0) for [0,0]", () => {
    const testArr = [0, 0];

    const result = arrayToLinkedlist(testArr);
    expect(result instanceof ListNode).toBeTruthy();
    expect(result.val).toEqual(0);
    expect(result.next.val).toEqual(0);
    expect(result.next.next).toBeNull();
  });

  it("linkedlistToArray return [0,0] for (0 -> 0)", () => {
    const testlList = new ListNode(0);
    testlList.next = new ListNode(0);

    const result = linkedlistToArray(testlList);
    expect(result).toEqual([0, 0]);
  });

  it("arrayToLinkedlist return (2 -> 4 -> 3) for [2,4,3]", () => {
    const testArr = [2, 4, 3];

    const result = arrayToLinkedlist(testArr);
    expect(result instanceof ListNode).toBeTruthy();
    expect(result.val).toEqual(2);
    expect(result.next.val).toEqual(4);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next).toBeNull();
  });

  it("linkedlistToArray return [2,4,3] for (2 -> 4 -> 3)", () => {
    const testlList = new ListNode(2);
    testlList.next = new ListNode(4);
    testlList.next.next = new ListNode(3);

    const result = linkedlistToArray(testlList);
    expect(result).toEqual([2, 4, 3]);
  });
});

describe("[Util] linkedList - clone Linkedlist.", () => {
  it("(0 -> 0)", () => {
    const testlList = arrayToLinkedlist([0, 0]);
    const result = clone(testlList);
    expect(linkedlistToArray(testlList)).toEqual([0, 0]);
    expect(linkedlistToArray(result)).toEqual([0, 0]);
  });

  it("(2 -> 4 -> 3)", () => {
    const testlList = arrayToLinkedlist([2, 4, 3]);

    const result = clone(testlList);
    expect(linkedlistToArray(testlList)).toEqual([2, 4, 3]);
    expect(linkedlistToArray(result)).toEqual([2, 4, 3]);
  });
});

describe("[Util] linkedList - add node to Linkedlist front.", () => {
  it("1, [2,3] -> [1,2,3]", () => {
    const testlList = arrayToLinkedlist([2, 3]);

    const result = prepend(1, testlList);
    expect(linkedlistToArray(result)).toEqual([1, 2, 3]);
    expect(linkedlistToArray(testlList)).toEqual([2, 3]);
  });
});
