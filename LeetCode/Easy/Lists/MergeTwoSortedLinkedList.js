/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }
    var result;
    var temp1;
    var temp2;
    if (l1.val <= l2.val) {
        result = new ListNode(l1.val);
        temp1 = l1.next;
        temp2 = l2;
    } else {
        result = new ListNode(l2.val);
        temp1 = l1;
        temp2 = l2.next;
    }
    while (temp1 != null || temp2 != null) {
        if (temp2 == null) {
            result.next=temp1;
            temp1 = null;
        } else if (temp1 == null) {
            result.next = temp2;
            temp2 = null;
        } else {
            if (temp1.val < temp2.val) {
                result.next = new ListNode(temp1.val);
                temp1 = temp1.next;
            } else {
                result.next = new ListNode(temp2.val);
                temp2 = temp2.next;
            }
        }
    }
    return result;
};


/**
 * temp1 = 5
 * temp2 = null
 *
 * result = 1 - 2 - 3 - 4 - 5
 *
 * l1 = (1 -> 3 -> 5)
 * l2 = (2 -> 4)
 *
 */

var main = function () {
    var l1 = new ListNode(5);
    var l2 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    var result = mergeTwoLists(l1, l2);
    var temp = result;
    while (temp != null) {
        console.log(temp.val);
        temp = temp.next;
    }
}