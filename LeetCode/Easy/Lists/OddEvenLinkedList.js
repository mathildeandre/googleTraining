function ListNodes(val, next) {
    this.val = val;
    this.next = next;
}

/**
 *
 * @param head
 * @returns {*}
 */
var oddEvenList = function (head) {
    if (head != null && head.next != null) {
        var tempOdd = head.next.next;
        var sec = head.next;
        var act = head;
        var even;
        while (tempOdd != null) {
            even = act.next;
            act.next = tempOdd;
            even.next = tempOdd.next;
            act = act.next;
            if (tempOdd.next != null) {
                if (tempOdd.next.next == null) {
                    tempOdd.next = sec;
                    break;
                } else {
                    tempOdd = tempOdd.next.next;
                }
            } else {
                tempOdd.next = sec;
                break;
            }
        }
    }
    return head;
}

/**
 * Reverse a linked list
 */
var reversList = function (head) {
    if (head != null) {
        var first = head;
        var prec = head;
        var temp = head.next;
        var suiv;
        while (temp != null) {
            suiv = temp.next;
            temp.next = prec;
            prec = temp;
            temp = suiv;
        }
        first.next = null;
        return prec;
    } else {
        return head;
    }
}

/**
 * Revers a linked list recursively
 */
var reserseListRec = function (head, prec) {
    if(head == null){
        return prec;
    }else{
        var temp = head.next;
        head.next = prec;
        return (reserseListRec(temp, head));
    }
}

var main = function () {
    //, new ListNodes(5, new ListNodes(6, new ListNodes(7, new ListNodes(8)))
    var head = new ListNodes(1, new ListNodes(2, new ListNodes(3, new ListNodes(4))));
    var result = reserseListRec(head, null);
    var temp = result;
    while (temp != null) {
        console.log(temp.val);
        temp = temp.next;
    }
}