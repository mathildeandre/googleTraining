/**
 *
 */
var lowestCommonAcestorRec = function (root, p, q) {

}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

};


var compare = function (p, q) {
    if (p == null && q == null) {
        return true;
    }
    else if (p != null && q != null && p.val == q.val) {
        return (compare(p.right, q.right) && compare(p.left, q.left));
    } else {
        return false;
    }
};


/* Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 * By recursion
 * @param root
 * @param p
 * @param q
 */
var lowestCommonAncestor = function (root, p, q) {
   var left;
    var right;
    if(root.left == p || root.left == q){
        left = root.val;
        right = lowestCommonAncestor(root.right, p, q);
    }
    if(root.right == p || root.right == q){
        right = root.val;
    }

    if(left == right){

    }

    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);



};




var main = function () {
    var tree = new TreeNode(6,
        new TreeNode(2,
            new TreeNode(3, null, null),
            new TreeNode(4,
                new TreeNode(10, null, null),
                new TreeNode(5, null, null))),
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)));

    var tree2 = new TreeNode(6,
        new TreeNode(2,
            new TreeNode(3, null, null),
            new TreeNode(4,
                new TreeNode(3, null, null),
                new TreeNode(5, null, null))),
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)));

    //alert(findMin(tree));
    //alert(compare(tree, tree2));

    alert(lowestCommonAncestor(tree, new TreeNode(3, null, null),
        new TreeNode(5, null, null)));
}



