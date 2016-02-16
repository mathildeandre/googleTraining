function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 *
 * @param root
 */
var postorderTraversal = function (root) {
    var pile;
    pile.push(root);
    var temp = root;
    var result;
    while (pile.length != 0) {
        temp = pile.pop();
        if (temp.left == null && temp.right == null) {
            result.push(temp.val);
        } else {
            tempNode = new TreeNode(tempNode.val);
            pile.push(tempNode);
            if (temp.right != null) {
                pile.push(temp.right);
            }
            if (temp.left != null) {
                pile.push(temp.left);
            }
        }
    }
    return result;
}

/**
 TEST
 temp = 2
 pile = (1 (null, null),

 result = (


 1  2


 */

var main = function(){
    var tree = new TreeNode(1,
        new TreeNode(5, new TreeNode(7, null, null)))
}