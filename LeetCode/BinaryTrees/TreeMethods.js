

// definition of binary tree
function TreeNode(val, left, right){
    this.val =val;
    this.left = left;
    this.right = right;
};

/**
 * Find minimum of binary tree.
 * By recursion
 */
var findMinTree = function(node, min){
    if(node != null && node.val <= min){
        min = node.val;
    }

    if(node == null){
        return min;
    }

    return Math.min(findMinTree(node.left, min), findMinTree(node.right, min));
}

/**
 * Find minimum of binary tree.
 * By iteration
 * @param node
 */
var findMinIt = function(root){
    var min = root.val;
    var tempPile = new Array();
    var temp = root;
    tempPile.push(temp);
    while (tempPile.length > 0) {
        if(min>temp.val){
            min = temp.val;
        }
        if (temp.left != null || temp.right != null) {
            if(temp.left == null){
                tempPile.push(temp.rigth);
            }else if(temp.right==null){
                tempPile.push(temp.left);
            }else{
                tempPile.push(temp.left);
                tempPile.push(temp.right);
            }
        }
        temp = tempPile.pop();
    }
    return min;
}

var main = function(){
    var tree = new TreeNode(6,
        new TreeNode(2,
            new TreeNode(3,null, null),
            new TreeNode(4,
                new TreeNode(10, null, null),
                new TreeNode(5, null, null))),
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)));

    alert(findMinTree(tree, tree.val));
    alert(findMinIt(tree));


}