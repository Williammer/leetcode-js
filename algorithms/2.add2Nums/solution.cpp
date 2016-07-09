/*
 * Problem: https://leetcode.com/problems/add-two-numbers/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// reference solution
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode preheader(-1), *curr=&preheader;
        int carry=0;
        while(l1||l2||carry) {
            curr->next = new ListNode(((l1?l1->val:0)+(l2?l2->val:0)+carry)%10);
            curr = curr->next;
            carry = ((l1?l1->val:0)+(l2?l2->val:0)+carry)/10;
            l1?l1=l1->next:0;
            l2?l2=l2->next:0;
        }
        return preheader.next;
    }

// recursion solution
public:
    ListNode* addTwoNumbersRecursion(ListNode* l1, ListNode* l2) {
        if(l1 == NULL) return l2;
        if(l2 == NULL) return l1;
        int sum = l1->val + l2->val;
        ListNode* l3;
        l3 = new ListNode(0);
        l3->next = addTwoNumbersRecursion(l1->next, l2->next);
        if(sum <= 9) l3->val = sum;
        else {
            l3->val = sum - 10;
            ListNode* dummy;
            dummy = new ListNode(1);
            l3->next = addTwoNumbersRecursion(dummy, l3->next);
        }
        return l3;
    }
};