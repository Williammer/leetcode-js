import { ListNode, arrayToLinkedlist } from "../../src/_.util/linkedList";
import { linkedListRandNode } from "../../src/382.linkedListRandNode/solution";

describe("# Problem 382 - Get linkedList;s Random Node.", () => {

    describe("Solution 1: Touch head's end to get its length, then generate a rand num for the node.", () => {
        it("shouldn't have same values of 10 calls.", () => {
        	let list = arrayToLinkedlist([1,2,3,4,5,6,7]),
        	arrayResult = [];

        	let num_1 = linkedListRandNode.touchEnd(list);
        	let num_2 = linkedListRandNode.touchEnd(list);
        	let num_3 = linkedListRandNode.touchEnd(list);
        	let num_4 = linkedListRandNode.touchEnd(list);
        	let num_5 = linkedListRandNode.touchEnd(list);
        	let num_6 = linkedListRandNode.touchEnd(list);
        	let num_7 = linkedListRandNode.touchEnd(list);
        	let num_8 = linkedListRandNode.touchEnd(list);
        	let num_9 = linkedListRandNode.touchEnd(list);
        	let num_10 = linkedListRandNode.touchEnd(list);

        	let result = num_1 === num_10
		    		&& num_1 === num_2
		    		&& num_1 === num_3
		    		&& num_1 === num_4
		    		&& num_1 === num_5
		    		&& num_1 === num_6
		    		&& num_1 === num_7
		    		&& num_1 === num_8
		    		&& num_1 === num_9;

        	expect(result).toEqual(false);
        });
    });

    describe("Solution 2: Reservoir sampling that progessively rand the node.", () => {
        it("shouldn't have same values of 10 calls.", () => {
        	let list = arrayToLinkedlist([1,2,3,4,5,6,7]),
        	arrayResult = [];
        	let num_1 = linkedListRandNode.touchEnd(list);
        	let num_2 = linkedListRandNode.touchEnd(list);
        	let num_3 = linkedListRandNode.touchEnd(list);
        	let num_4 = linkedListRandNode.touchEnd(list);
        	let num_5 = linkedListRandNode.touchEnd(list);
        	let num_6 = linkedListRandNode.touchEnd(list);
        	let num_7 = linkedListRandNode.touchEnd(list);
        	let num_8 = linkedListRandNode.touchEnd(list);
        	let num_9 = linkedListRandNode.touchEnd(list);
        	let num_10 = linkedListRandNode.touchEnd(list);

        	let result = num_1 === num_10
        		&& num_1 === num_2
        		&& num_1 === num_3
        		&& num_1 === num_4
        		&& num_1 === num_5
        		&& num_1 === num_6
        		&& num_1 === num_7
        		&& num_1 === num_8
        		&& num_1 === num_9;

        	expect(result).toEqual(false);
        });
    });

});
