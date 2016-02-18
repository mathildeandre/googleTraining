
/*

    Find the lowest common ancestor of two given nodes in a Binary Search Tree
    // TODO : in iteratif

 */




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
    var left = null;
    var right = null;
    if(root == null){
        return null;
    }
    if(root == p || root ==q){
        return root.val;
    }
    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);

    if(left != null && right != null){
        return root.val;
    }else if(left == null && right == null){
        return null;
    }else if(left == null){
        return right;
    }else if(right == null){
        return left;
    }

};

/**
 *
 *  f(6, 0, 5)
 *      left = f(2,p,q) =   left=f(0,0,5) = 0
 *                          right=f(4,0,5) =    left=f(3,0,5) =     left=f(null, = null
 *                                                                  right = f(null =null
 *                                                                  //traitement => null
 *                                              right=f(5,0,5) = 5
 *                                              //traitements
 *                                              => 5
 *                          //traitement
 *                          => 2
 *      right = f(8, p, q)
 *      traitement
 *      => 2
 *
 */


var main = function () {
    var p = new TreeNode(0, null, null);
    var q2 = new TreeNode(5, null, null);

    var q =   new TreeNode(4,
        new TreeNode(3, null, null),
        q2);
    var tree = new TreeNode(6, new TreeNode(2, p,q), new TreeNode(8,
        new TreeNode(7, null, null),
        new TreeNode(9, null, null)));


    alert(lowestCommonAncestor(tree, p, q2));
}



