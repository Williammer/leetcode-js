/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/linked-list-random-node/
    Given a singly linked list, return a random node's value from the linked list.
     Each node must have the same probability of being chosen.

 * Example 1:
    '1 -> 2 -> 3' should return either 1, 2, or 3 randomly


 * @param {ListNode} head
 * @return {number}

 * Analysis: Touch end to get length is my first thought,
  later I learnt about the Reservoir sampling approach which progressively rand each node.

************************************************************************************************************************/


export const linkedListRandNode = {};

/**
 * Solution 1: Touch head's end to get its length, then generate a rand num for the node.
 *
 * "N" is head's length
 * Time complexity: O(2N)
 * Space complexity: O(N)
 */
linkedListRandNode.touchEnd = (head) => {
	let resultHead = head,
		lastIndex = 0;

    while(head.next){
        lastIndex++;
        head = head.next;
    }

    let randIndex = Math.floor(Math.random() * (lastIndex+1));
    while(randIndex > 0){
        resultHead = resultHead.next;
        randIndex--;
    }

    return resultHead.val;
};

/**
 * Solution 2: Reservoir sampling that progessively rand the node.
 *
 * "N" is head's length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
linkedListRandNode.reservoirSample = (head) => {
	if(!head.next){
        return head.val;
    }

    const getRand = function(min, max){
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    let resultHead = head,
        selectedVal = resultHead.val;

    for(var i = 1; resultHead.next !== null; i++){
        let rand = getRand(0, i);

        if(rand === 0){
            selectedVal = resultHead.next.val;
        }
        resultHead = resultHead.next;
    }

    return selectedVal;
};


/************************************************************************************************************************

 * Lessons:
   1. Probability can be an idea-helper to solve programming problems.

************************************************************************************************************************/
